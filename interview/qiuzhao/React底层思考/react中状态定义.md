## 状态有必要定义吗？
- *这个状态有必要吗？是否能通过计算得到？是否只是一个中间状态*
- 状态最小化，不是中间态

### 受控组件（多）
- 在 React 中，对表单组件的处理可以分为两种，受控组件和非受控组件：
受控组件：组件的展示完全由传入的属性决定。比如说，如果一个输入框中的值完全由传入的 value 属性决定，而不是由用户输入决定，那么就是受控组件，写法是：< input value={value} onChange={handleChange} />。这也是为什么只给 < input/> 传了一个 value 值但是没有传 onChange 事件，那么键盘怎么输入都没有反应。
非受控组件：表单组件可以有自己的内部状态，而且它的展示值是不受控的。比如 input 在非受控状态下的写法是：< input onChange={handleChange}/>。也就是说，父组件不会把 value 直接传递给 input 组件。

### 状态怎么写
- 依赖外部props 传递，没有内部useState
  - 数据来源清晰，可复用强
- `展开运算符`，只更新变化部分。统一接口，所有变化都用一个函数处理。useCallback 避免不必要的重新渲染
```js
const handleChange =  useCallback((deltaValue) => {
    setUser(prev => ({ ...prev, ...deltaValue }));
  }, []);
```
### 状态管理方法
- 常规有两层 props
- useContext + 自定义hooks
```js
const UserContext = createContext();
function UserProvider = ({ children }) = {
    const [user,setUser] = useState({ name: 'Tome', age: '18'});
    const handerChange = useCallback((deltaValue) => {
        setUser(prev => ({...prev, ...deltaValue}))
    },[]);
    return (
        <UserContext.provider value={{ user, handerChange }}>
            {children}
        </UserContext.provider>
    )
}
```
- 第三方

### 会不会重新渲染
- 会：setPrice都会创建新对象，相应使用到value 的函数都变
- 不会：useMemo，useCallback 等引用
  useRef ：valueRef.current = value ,
- 不必要：
  - 简单的计算或函数创建成本很低
  - 组件很少重新渲染
  - 依赖数组经常变化（反而增加开销）

### userSearchParams 实现,绑定 URL 上的查询字符串参数
- 类型一致性：*useState 设定，全程使用普通对象，避免 URLSearchParams 和对象混用*
  事件处理完整性：既要注册监听器，也要在清理时移除
  `双向同步：状态→URL 和 URL→状态 都要处理`
  依赖管理：useEffect 依赖数组要准确
  API 设计：返回标准的 [state, setState] 格式
  性能考虑：使用 useCallback 稳定函数引用
  `初始化优化：使用函数式初始化避免重复计算`

```js
const useSearchParams = (initialUrl = window.location.search) => {
    // 初始化：将 URL 参数转换为普通对象
    const [searchParams, setSearchParams] = useState(() => {
        const urlParams = new URLSearchParams(initialUrl);
        return Object.fromEntries(urlParams.entries());
    });

    // 状态变化 → 更新 URL
    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState(null, '', newUrl);
    }, [searchParams]);

    // URL 变化 → 更新状态（监听浏览器前进后退）
    useEffect(() => {
        const handlePopState = () => {
            const urlParams = new URLSearchParams(window.location.search);
            setSearchParams(Object.fromEntries(urlParams.entries()));
        };

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    // 提供统一的更新接口
    const handleChange = useCallback((deltaValue) => {
        setSearchParams(prev => ({ ...prev, ...deltaValue }));
    }, []);

    return [searchParams, handleChange];
};
```
### 答疑
#### hooks 为啥还像class 里面重新渲染，不是纯函数吗？
- 自定义 Hooks 要实现的逻辑，要么用到 state，要么用到副作用，是一定会用到内置 Hooks 或者其它自定义 Hooks 的。
#### 每次都会render执行的语句是放在 无依赖的useEffect中呢，还是直接放在函数体中比较好呢？
- useEffect 代表副作用，是在函数render 完后执行。而函数体中的代码，是直接影响当次 render 的结果。
- ESLint 的作用是帮助你发现可能存在的错误，而Hooks 本身并不需要依赖数组是常量，只要你确定写法没有问题，那么这种可以忽略 eslint 的配置，比如加上 //eslint-disable-line 这样的注释。类似的，如果要用 Hooks 实现一个 componentDidMount 这样的功能，我们看到是需要传递一个空的数组作为 useEffect 的依赖项，那么这时候即使副作用内部使用了某些变量，那么只要你确定它只有第一次需要用到，后面无需再关心，那么也可以在这一行禁用 ESLint 的检查
#### 函数式更新 vs 依赖外部
- useCallback 避免函数重新创建，那怎么实现更新？
  - 避免新建函数，减少作为子组件时props 导致重新渲染
  - 但是内部setState 函数还是会执行，
  - setState 不传入函数为参数就产生**闭包陷阱**，传入理解为纯函数prev 每次是最新的
    React 在调用更新函数时动态传入
```js
// ❌ 闭包陷阱版本
const [count, setCount] = useState(0);
const handleIncrement = useCallback(() => {
  setCount(count + 1); // count 被"冻结"在创建时的值
}, []); // 空依赖，count 永远是 0

// 结果：无论点多少次，count 都是 0 + 1 = 1

// ✅ 函数式更新版本  
const handleIncrement = useCallback(() => {
  setCount(prev => prev + 1); // prev 由 React 在调用时提供最新值
}, []);
```
- 其他解决方案，useRef，依赖项
  - 依赖项：useEffect 依赖数组要准确
  - useRef：valueRef.current = value

