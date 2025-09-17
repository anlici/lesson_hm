### 权限控制系统
**问题：菜单权限控制是如何设计的？**
- 核心RBAC 用户-角色-权限 三层解耦
  用户登入后系统自动获取用户角色和权限信息，基于角色显示不同菜单项
  - 实现：通过authResource 函数，获取当前登入用户的权限列表
    遍历菜单列表，筛选出用户有权限的菜单项
  - 比如：美团普通员工只有查看的权限，这时候就不会匹配到创建和编辑的权限的菜单
- 难点：用户权限更新后，前端菜单不能及时更新，想要用户自己刷新页面才能更新
  - 后段权限变革，通过webSocket 推送消息到前端
    前端收到消息后，清理权限缓存
    重新获取用户信息，刷新页面
- 灵活和可维护型，在缓存权限列表，性能有提升

## 多环境支持系统

### 环境识别与切换
**问题：基于域名的环境识别具体是如何实现的？**
- 主要支持两种环境：线上和线下环境，每个有对应的域名
- 采用配置驱动和自动识别方式
  - 首先，使用全局环境对象 管理不同环境，主要包含域名、API 基础地址和端口号等
  - 基于`window.location.hostname` 获取当前访问的域名，匹配对应环境
  - 通过匹配成功 实现环境切换功能。
  - 同时，在页面右上方有环境切换按钮，点击切换环境
  
### 数据一致性保证
**问题：切换后如何保证数据的一致性？**
- 我们项目采用三层保障 + 无感知切换的策略来确保环境切换时的数据一致性：
- 请求层的动态路由：我们不是用传统的env文件管理环境地址，而是通过运行时的context.PORTAL_HOST动态拼接API地址。比如request(\PORTALHOST{PORTAL_HOST}PORTALH​OST{API.BATCH_MENU_TREE}`)`，这样当用户切换环境时，所有API请求会自动路由到对应环境的服务器，用户完全无感知。
- 缓存层的多维隔离：我们用功能前缀 + 应用标识 + 环境标识的分层命名策略来避免缓存冲突。比如PORTAL_MENU_${appId}_${env}_COLLAPSED这样的键名，既区分了不同项目，又区分了不同环境。每个环境的context.appId和PORTAL_HOST都不同，天然实现了缓存隔离，避免了你提到的"测试数据在生产环境显示"的问题。
- 状态层的自动同步：这是最巧妙的部分。当用户点击环境切换时，系统会触发history.pushState和popstate事件，相当于执行了一次路由重新加载。这样既清理了内存中的临时状态，又重新从新环境的服务器获取数据，实现了状态的自动同步。
  - 这比手动清理sessionStorage更彻底，也避免了时序问题带来的数据不一致。
    可以使用useEffect
  - 每个环境切换都会更新context.PORTAL_HOST，即使有异步请求还在进行，它们的响应也会因为context变化而被忽略。代码中的request方法都会传入context参数，确保请求和当前环境状态一致
- 核心优势：整个切换过程对用户来说就像在使用同一个系统的不同版本，点击切换按钮后，页面自动刷新到新环境，所有的数据隔离、状态清理、重新获取都在后台自动完成，用户体验非常流畅。这种设计既保证了数据的准确性，又避免了复杂的手动清理逻辑。
- big.js 插件化
## 性能优化
### 代码分割与懒加载
**问题：你是如何实现基于路由的代码分割的？**
- 最初项目打包 bundle 有2mb多，首评加载很慢。采用路由级别代码分割来解决这个问题
  - 在路由配置中，我把原来的直接import改成了React.lazy动态导入
  - 然后用Suspense组件包裹整个路由，这样用户在页面切换时会看到loading状态，而不是白屏
  - 这样优化后，首页的bundle从2MB降到了500KB左右，首屏加载速度有了明显的提升。
### 性能指标监控
**问题：40%的首屏加载时间优化，具体是通过哪些指标来衡量的？**
- 我主要关注四个核心指标，这些都是Google推荐的Web Vitals指标：
    - FCP（首次内容绘制）：用户看到第一个内容的时间，我们从1.8秒优化到了1.1秒 
    - LCP（最大内容绘制）：主要内容加载完成的时间，从3.2秒优化到了1.9秒
    - FID（首次输入延迟）：用户第一次交互的响应时间，保持在100ms以内 
    - CLS（累积布局偏移）：页面布局稳定性，控制在0.1以下
- 为了准确监控这些指标，我使用了浏览器原生的PerformanceObserver API。
  这个API的好处是精度很高，不会阻塞主线程，能真实反映用户的感知体验。
    - 具体实现：
   ```typescript
   // 性能监控
   const performanceObserver = new PerformanceObserver((list) => {
     list.getEntries().forEach((entry) => {
       if (entry.entryType === 'navigation') {
         const loadTime = entry.loadEventEnd - entry.fetchStart;
         console.log('页面加载时间:', loadTime);
       }
     });
   });
   
   // performanceObserver.observe({ entryTypes: ['navigation', 'paint'] });
   ```
- 其他优化，达到40% 提升
    1. 资源预加载 我分析了用户的访问路径，发现80%的用户会从首页进入用户管理页面。
    所以我在首页添加了prefetch，提前加载用户管理页面的代码。
    2. 图片优化 我们有很多用户头像和图标，我做了两个优化：
     - 使用WebP格式，文件大小减少了30%
     - 实现了图片懒加载，只有滚动到可视区域才加载
    3. 关键CSS内联 把首屏必需的CSS直接内联到HTML中，避免额外的网络请求。非关键的CSS异步加载，不阻塞页面渲染。
    4. CDN加速 静态资源全部放到CDN上，利用HTTP/2的多路复用特性，并行加载资源

### 懒加载用户体验优化
**问题：有没有遇到懒加载过程中的用户体验问题？如何解决的？**
- 问题1：加载闪烁 最开始用的是简单的Loading动画，用户反馈页面会'闪一下'，体验不好。
  我改成了`骨架屏（Skeleton），模拟页面的基本结构，视觉上更平滑`。
- 问题2：网络异常处理 有用户网络不好时，页面一直loading。
  我加了`重试机制和降级方案`：
  - 3秒内没加载成功，显示重试按钮
  - 重试3次还失败，显示离线页面

2. **组件级懒加载**：
除了路由级别，我还实现了组件级的懒加载。比如页面下方的数据表格，用户不一定会滚动到那里看，所以我只在可视区域加载这个表格。
   ```typescript
   // 可视区域懒加载
   const LazyComponent = ({ children }) => {
     const [isVisible, setIsVisible] = useState(false);
     const ref = useRef();
     
     useEffect(() => {
       const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) {
           setIsVisible(true);
           observer.disconnect();
         }
       });
       
       if (ref.current) observer.observe(ref.current);
       return () => observer.disconnect();
     }, []);
     
     return <div ref={ref}>{isVisible ? children : <Skeleton />}</div>;
   };
   ```
- 减少了初始渲染的DOM节点数量
  节省了网络请求
  提升了页面的整体响应速度
  
### 面包屑组件设计
**问题：面包屑组件是如何处理动态路由变化的？**
我设计的核心思路是让它能够自动感知路由变化，并实时更新显示。
具体实现是这样的：我使用React Router的useLocation钩子监听路由变化，每当用户跳转页面时，组件会自动解析当前路径，生成对应的面包屑导航。
```typescript
// 我会这样解释核心逻辑
const Breadcrumb = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  
  useEffect(() => {
    // 把路径按/分割，过滤掉空字符串
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    // 为每个路径段生成面包屑项
    const crumbs = pathSegments.map((segment, index) => {
      // 构建完整路径
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      return {
        name: getRouteTitle(path), // 从路由配置获取中文标题
        path,
        active: index === pathSegments.length - 1 // 最后一项是当前页面
      };
    });
    
    setBreadcrumbs(crumbs);
  }, [location.pathname]); // 路径变化时重新计算
  
  return (
    <nav>
      {breadcrumbs.map((crumb, index) => (
        <span key={crumb.path}>
          {crumb.active ? 
            crumb.name : // 当前页面不可点击
            <Link to={crumb.path}>{crumb.name}</Link> // 其他页面可点击跳转
          }
          {index < breadcrumbs.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
};
```


### 组件通信方案
**问题：组件间是如何通信的？有没有使用状态管理？**
- 我们项目使用了MobX作为状态管理工具，结合多种通信模式来处理不同场景的组件通信。
- 为什么选择MobX？ 相比Redux，MobX的学习成本更低，写法更简洁，特别适合我们这种中小型项目。
  它的响应式特性让状态变化能自动触发组件更新。
1. **MobX 状态管理**：
   ```typescript
   // Store 设计
   class AppStore {
     @observable menuCollapsed = false;
     @observable currentUser = null;
     
     @action
     toggleMenu = () => {
       this.menuCollapsed = !this.menuCollapsed;
     };
     
     @computed
     get userPermissions() {
       return this.currentUser?.permissions || [];
     }
   }
   ```
实际项目中，90%的通信都是通过MobX Store解决的，剩下10%用其他方式补充
2. **通信模式**：
  - 1. 父子组件通信：使用Props + Callback 最简单直接，父组件传数据给子组件，子组件通过回调函数通知父组件
  - 2. 兄弟组件通信：通过共同父组件或MobX Store 
  比如侧边栏的折叠状态需要影响主内容区域的宽度，就通过Store共享状态
  - 3. 跨层级组件通信：Context API + MobX 避免props层层传递，直接在需要的组件中注入Store
  - 4. 全局事件通信：EventEmitter模式 处理一些松耦合的通信，比如全局消息提示、主题切换等

## 问题解决与测试

### 技术难点解决
**问题：在开发过程中遇到的最大技术挑战是什么？如何解决的？**

**优化回答：**
最大的挑战是**多环境下的状态同步和路由一致性问题**：

1. **问题描述**：
   - 面包屑路径在环境切换后显示异常
   - 菜单高亮状态与当前路由不匹配
   - 用户权限在不同环境下不一致

2. **排查思路**：
   - 使用 React DevTools 分析组件状态变化
   - 通过 Network 面板检查 API 请求时序
   - 添加详细的日志记录定位问题根因

3. **解决方案**：
   - 实现统一的路由状态管理器
   - 添加环境切换时的状态清理机制
   - 建立权限数据的缓存和同步策略

### 灰度发布机制
**问题：测试环境门户在灰度状态时是否还能进行编辑？**

**优化回答：**
1. **灰度状态管理**：
   ```typescript
   // 使用 sessionStorage 管理灰度状态
   const GRAY_RELEASE_KEY = 'gray_release_status';
   
   const setGrayStatus = (status: boolean) => {
     sessionStorage.setItem(GRAY_RELEASE_KEY, JSON.stringify(status));
   };
   
   const getGrayStatus = (): boolean => {
     const status = sessionStorage.getItem(GRAY_RELEASE_KEY);
     return status ? JSON.parse(status) : false;
   };
   ```

2. **选择 sessionStorage 的原因**：
   - **会话级别**：只在当前标签页有效，避免跨会话污染
   - **页面刷新保持**：刷新后状态仍然存在
   - **自动清理**：标签页关闭后自动清除
   - **同源隔离**：不同域名间数据隔离，安全性更好

3. **编辑权限控制**：
   - 灰度状态下禁用编辑功能，显示只读模式
   - 提供明确的状态提示和切换入口
   - 确保数据一致性和用户体验
