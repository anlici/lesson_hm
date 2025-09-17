# 异步 封装 api client 请求
## 通用 vs 专门hooks 实现client
- 通用针对简单请求，用axios 或者fetch 都行
  但遇到复杂（多个请求，参数数据结构不一样，每个场景有额外逻辑），组件本身逻辑复杂化
- 专门hooks
  - 每个 Hook 专注一个业务场景
    数据处理逻辑内聚在 Hook 内部，特别是**promise.all 处理多个请求**
    组件只关心使用，不关心实现，
  - 类型安全ts ，多个组件复用同一个hook
## 多个api 请求
- 同时包含了并发和串行的场景：文章内容和评论列表是两个可以并发的请求，它们都通过 Article ID 来获取；用户的信息需要等文章内容返回，这样才能知道作者的 ID，从而根据用户的 ID 获取用户信息，这是一个串行的场景
- React 函数组件是一个同步的函数，没有办法直接使用 await 这样的同步方法，而是要把请求通过副作用去触发
  - 状态驱动 UI，*从状态异步实现*
  - 唯一的变化就是在 useEffect 里加入了ID是否存在的判断
## 案例
### 我们希望在有些组件自动获取，但有的组件中需要点击某个按钮才去获取数据，那么你会如何设计这个 Hook？
- 根据用户偏好动态决定是否自动加载、
- 默认智能：大多数场景下自动工作；
- 统一api，觉得控制权

推荐方案：返回触发函数模式 + 参数控制
```js
const useArticle = (articleId, options = {}) => {
    // 解构参数，fetchOptions 是剩余的所有其他参数
  const { immediate = true, ...fetchOptions } = options;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 核心获取函数，使用 fetchOptions 中的请求配置
  const fetchArticle = useCallback(async (customId = articleId) => {
    if (!customId) return;

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/articles/${customId}`, fetchOptions);
      const data = await response.json();
      setArticle(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [articleId, fetchOptions]);

  // 自动触发逻辑
  useEffect(() => {
    if (immediate && articleId) {
      fetchArticle();
    }
  }, [fetchArticle, immediate, articleId]);

  return {
    article,
    loading,
    error,
    fetchArticle, // 始终返回触发函数
    refetch: () => fetchArticle(articleId) // 重新获取当前文章
  };
};
```

### Hook 都是使用的 useState 保存了状态数据，也就意味着状态的范围限定在组件内部，组件销毁后，数据就没了。那么如果希望数据直接缓存到全局状态，应该如何做呢？
- 中大型：第三方状态管理，比如zustand，mobx
  优点：有性能优化，成熟方案，开发调试完善
  缺点：学习第三方库的使用
- 小型：全局状态 + Context 模式
  优点：原生，无需额外依赖，数据流清晰，调试范围更好控制
  缺点：context 更新所以消费者重新渲染，代码相对复杂
- 敏感数据：外部存储模式
    - 外部存储模式：外部存储模式是指将数据存储在外部的存储介质中，而不是在组件内部存储数据。
  优点：完全脱离react 组件树，性能最优，减少不必要的渲染，实现跨应用共享
  缺点：手动订阅/发布机制，
- hooks 每次先从缓存读取，包括useState 

#### 解决方案1：全局状态 + Context 模式
```js
// 伪代码：Context 缓存方案
const ArticleCacheContext = createContext();

function ArticleCacheProvider({ children }) {
  const [cache, setCache] = useState(new Map());

  const getCached = (id) => cache.get(id);
  const setCached = (id, data) => setCache(prev => new Map(prev).set(id, data));

  return (
    <ArticleCacheContext.Provider value={{ getCached, setCached }}>
      {children}
    </ArticleCacheContext.Provider>
  );
}

// Hook 使用缓存
const useArticle = (articleId, options = {}) => {
  const { getCached, setCached } = useContext(ArticleCacheContext);
  const [article, setArticle] = useState(() => getCached(articleId));
  // ... loading, error 状态

  const fetchArticle = async () => {
    const cached = getCached(articleId);
    if (cached) return setArticle(cached);

    // 发起请求 -> 更新本地和缓存
    const data = await fetchFromAPI(articleId);
    setArticle(data);
    setCached(articleId, data);
  };

  // 自动触发逻辑...
  return { article, loading, error, fetchArticle };
};
```

#### 解决方案2：外部存储模式

```js
// 伪代码：外部缓存存储
class ArticleCache {
  constructor() {
    this.cache = new Map();
    this.listeners = new Set();
  }

  get(id) { return this.cache.get(id); }
  set(id, data) {
    this.cache.set(id, data);
    this.notifyListeners(id, data);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  notifyListeners(id, data) {
    this.listeners.forEach(listener => listener(id, data));
  }
}

const articleCache = new ArticleCache();

// Hook 使用外部缓存
const useArticle = (articleId, options = {}) => {
  const [article, setArticle] = useState(() => articleCache.get(articleId));
  // ... loading, error 状态

  // 监听缓存更新
  useEffect(() => {
    return articleCache.subscribe((id, data) => {
      if (id === articleId) setArticle(data);
    });
  }, [articleId]);

  const fetchArticle = async () => {
    const cached = articleCache.get(articleId);
    if (cached) return setArticle(cached);

    // 发起请求 -> 自动通知所有监听者
    const data = await fetchFromAPI(articleId);
    articleCache.set(articleId, data);
  };

  // 自动触发逻辑...
  return { article, loading, error, fetchArticle };
};
```

#### 解决方案3：第三方状态管理（推荐）

```js
// 伪代码：Zustand 方案
const useArticleStore = create((set, get) => ({
  articles: new Map(),
  loading: new Set(),
  errors: new Map(),

  getArticle: (id) => get().articles.get(id),
  setArticle: (id, data) => set(state => ({
    articles: new Map(state.articles).set(id, data)
  })),

  fetchArticle: async (id, options) => {
    const cached = get().getArticle(id);
    if (cached) return cached;

    // 发起请求并缓存
    const data = await fetchFromAPI(id, options);
    get().setArticle(id, data);
    return data;
  }
}));

// 简化的 Hook
const useArticle = (articleId, options = {}) => {
  const article = useArticleStore(state => state.getArticle(articleId));
  const fetchArticle = useArticleStore(state => state.fetchArticle);

  const handleFetch = useCallback(() => {
    return fetchArticle(articleId, options);
  }, [articleId, options, fetchArticle]);

  // 自动触发逻辑...
  return { article, loading, error, fetchArticle: handleFetch };
};
```
