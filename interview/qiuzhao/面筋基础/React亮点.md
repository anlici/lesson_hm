## react 不同版本差异
- 16: 引入fiber 架构，解决早期版本阻塞渲染问题
- 17: 引入hooks，事件委托改变（从document 改成 根容器）
  jsx 语法糖
- 18: 
  - 并发，`createRoot 替代react.render 启动并发`
  - suspense 增强，支持服务器渲染流式传输
  - 自动批处理，多个状态更新自动合并.在定时器、Promise 或事件回调中，
    多个 setState 会自动合并，而 React 17 及之前仅在 React 事件回调中支持批处理。
  - 新增了hooks ，比如 useTransition 钩子（非紧急情况下使用，允许中断）

### fiber 架构
- 【大化小，优先不优先，render 阶段可中断，commit 一次性原子性执行】
- 优先级调度：用户输入 > 动画 > 布局 > 绘制
- 任务拆分：任务拆分后，react 不再是一个整体，而是拆分成多个小任务

## 常见hooks
- 内置管理：
    useState：状态管理，组件局部状态。比如计数等简单
    useContext：跨组件数据传递，组件树不用props 传递
    useReducer：
    useEffect：副作用处理
- 外：
  - mobx： 响应式，通过observable将状态标记为可观察的，
    使用action来修改状态，自动追踪状态变化，当状态发生改变时，会自动更新依赖该状态的组件
  - reducx：
  - zustand
  - recoil：
- 性能优化 Hooks
    useMemo：缓存计算结果
    useCallback：缓存函数引用
    memo：组件级别缓存
- 其他 Hooks
    useRef：引用DOM或保存可变值
    useReducer：复杂状态管理
    useLayoutEffect：同步执行副作用
### useEffect 不是纯函数  挂载，组件卸载时执行return
- 副作用函数+依赖数组
- 依赖数组不传，每次都执行；传空数组，只执行一次；传依赖变量，只执行依赖变量变化时
- 场景：数据请求、事件绑定（事件监听，窗口大小变化）、DOM操作
- 【React 默认浅比较，对象内部属性变化需要创建新对象才能触发更新】
  - setState({...user,age:21})
  - prev = useRef() ,prev.current = user
  - 直接修改嵌套属性不会执行，但是useEffect 监听对应属性变化会执行

