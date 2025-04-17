## zustand 
    轻量级：Zustand 的压缩体积不到 1KB，打包后不会显著增加应用体积，适合中小型项目。
    细粒度状态更新：Zustand 采用基于发布订阅的模型，只更新订阅了状态变化的组件，避免了不必要的渲染，从而提升了性能。
    灵活的状态结构：支持创建多个独立的状态存储（store），避免了单一全局状态树的复杂性，进一步优化了性能。
    直接状态突变：Zustand 的状态更新机制相比 Redux 更高效，特别是在大型应用中，减少了状态变化带来的性能开销。

## vue 和 react 的区别
- 设计理念：
  - vue：
    - 渐进式框架，专注业务逻辑，通过指令和组件来扩展功能。
    - vue 的核心是响应式系统，通过数据驱动视图的更新。我们更多关注于图层变化，去按需引入路由
    - vue 能够自动跟踪依赖，vue3 使用 proxy 代替 Object.defineProperty，性能更好
  - react：
    - 专注组件化，需要结合其他库使用，如zustand，redux等，构建完整
    - 像状态更新，需要显示调用useState，依赖手动操作
- 代码层面：
  - vue：单文件组件（src），将模板、样式和逻辑封装在一个文件中，提高了代码的可读性和可维护性。
  - React ：
    - 使用useState等Hooks管理状态和副作用，强调逻辑复用和组合
    - 类组件：传统方式（逐渐被Hooks替代），依赖生命周期
- 数据流和状态管理：
  - vue：使用v-model实现数据双向绑定，依赖收集，数据变化时视图更新。
    并且简化了表单处理，底层是单向数据流+事件监听语法糖
  - react： 使用useState和useEffect实现数据流和状态管理，依赖收集，数据变化时视图更新。


## 水合（hydration） 和 合成事件（synthetic event）
- 水合：指的是服务器生成静态html 和客户端JavaScript 事件处理程序和状态 结合的过程。
  服务器生成的HTML 包含了事件处理程序和状态，客户端JavaScript 负责将这些信息与DOM 进行关联，
  使得用户交互能够正常工作。
  react 实现：reactDom.hydrate(element, container) （react18以前）
  hydrateRoot(container, element) （react18以后）

- 合成事件机制(Synthetic Events)
  合成事件是React特有的事件处理系统：

- 定义 ：React将原生DOM事件包装成合成事件对象，统一绑定到根节点(document)
- 工作原理 ：
  - 事件委托：所有事件都委托到根节点，而不是直接绑定到DOM元素
  - 事件池：重用事件对象，减少内存消耗
  - 事件分发：根据事件冒泡路径，找到对应组件并执行其事件处理函数
### 主要区别
- 目的不同 ：
  - 水合：解决SSR与客户端渲染的衔接问题
  - 合成事件：解决跨浏览器兼容性和性能优化问题
- 作用范围 ：
  - 水合：整个应用的生命周期中只发生一次
  - 合成事件：贯穿应用的整个生命周期
- 技术领域 ：
  - 水合：服务端渲染与客户端渲染的桥梁
  - 合成事件：前端事件处理系统
  
## 受控和非受控
- 受控组件一般是指表单元素，表单的数据由React的 State 管理，更新数据时，需要手动调用setState()方法，更新数据。因为React没有类似于Vue的v-model，所以需要自己实现绑定事件。
- 非受控组件指的是该表单元素不受React的State管理，表单的数据由DOM管理。通过useRef()来获取表单元素的值。

## fiber 
- 核心：增量渲染，优先级调度、双缓存树
- 工作原理：render 阶段，构建fiber树并且标记需要执行的副作用，比如dom更新
- 这个阶段可以中断，并且处理副作用
- commit 阶段：执行dom更新，更新dom树，更新视图


## react hooks 和 utils 区别？
- react hooks：hooks 是 react 16.8 新增特性，区别于类组件
  可以在函数组件使用状态和其他react特性；打破函数组件只能渲染ui，不能使用状态和生命周期的特性
  一般以use 开头
  useContext 组件树传递上下文（context），避免通过逐层传递props 麻烦比如：主题色，通过上下文在多组件共享
- utils 是自己写的一些方法，用于解决一些问题。实现某些逻辑，减少重复代码，不依赖于react生命周期
## react18 新特性
- react18 异步渲染
- 提供canvas 渲染功能
- 使用suspense for server。使得服务器渲染更好处理异步组件加载
- 重写fiber，提升性能，支持中断

## useCallback 和 useMemo 
- useCallback: 缓存函数，避免每次渲染都创建新函数，减少函数创建成本，提升性能。从而减少子组件不必要渲染。
  useCallback(fn,deps)：解释fn 函数和deps依赖项，当依赖项改变时，重新创建函数
- 一般useCallback 不使用；因为useCallback 本身存在开销，需要维护一个缓存并且每次渲染都要坚持依赖项是否变化；
  如果子组件渲染不成问题，或函数依赖变化少，减少不必要开销
  useCallback 增加代码，可读性差，增加维护成本，增加bug
  react 默认每次渲染都是重新创建函数，而子组件如果没有使用react.memo（对子组件props 进行浅比较优化），每次渲染都会重新创建函数，导致子组件重新渲染，
  useCallback 多余

## 受控与非受控组件
- 受控组件：通过state 控制组件状态，通过onchange事件更新state，通过state渲染组件
  可以通过代码进行修改表单 value 输入
  通过value 属性获取，适合：表单校验、动态控制
- 非受控：通过ref 获取dom 节点，直接操作dom 节点，适合：文件上传
  只有用户能够改变value，不能通过代码修改value；但是可以设置defaultValue 初始value ，通过ref 获取dom 节点，操作dom 节点
- 只要用户输入，不手动修改表单值，非受控就行

## react怎么进行状态管理？状态管理为什么需要？
- 内置：useState，useReducer、useContext（context api 跨组件共享状态）
- 第三方：redux（全局管理）、zustand（轻量级）
- 状态管理：
  - 实现组件通信：父子通过props，自定义事件
    兄弟：状态提升，事件总线？ 父组件通过事件总线，传递事件，子组件通过事件总线，接收事件，触发事件
    跨层：context api 全局状态管理
  - 状态共享：统一数据源，减少重复请求
  - 复杂逻辑：状态机制管理，实现高效共享和同步更新
```js
const UserContext = React.createContext();
// 提供状态
function App() {
  return (
    <UserContext.Provider value={{name: 'zhangsan'}} >
      <Child />
    </UserContext.Provider>
  )
}
// 消费
function Child() {
  const {name} = useContext(UserContext);
  return (
    <div>{name}</div>
  )
}
```

## 什么redux做到而useState/useEffect 做不到
- 全局状态管理：use 内部；
- 状态历史跟新
- 中间件：redux redux-thunk 处理异步
- 状态持久化：redux-persist

- zustand: 轻量级，性能好，
  create 创建一个状态管理器store，定义状态和修改方法
  useStore hooks 在组件访问和更新状态

- 事件总线EventBus：基于发布-订阅 通信机制，允许通过一个中央事件中心，通常是一个对象或实例，用于存储时间和对应回调函数。
  on 订阅事件，emit 发布（触发）事件，off 取消订阅（解绑）
  - 缺点：订阅和发布分离，订阅者不知道发布者存在，订阅者不知道发布者发布什么事件，订阅者不知道发布者发布事件时传递什么参数
- 如何实现？
  父组件可以通过调用事件总线的 emit 方法触发事件，并传递数据。子组件通过调用事件总线的 on 方法订阅事件，并注册回调函数来响应事件。子组件在卸载时需要调用 off 方法解绑事件，以避免内存泄漏。

## https 连接 特仑苏（tls）VS tcp
- https连接：基于tcp三次握手建立连接，
  客户端发送client hello 报文，包括支持的tls版本、随机数和加密套件。服务器响应server hello 报文，包括加密套件、随机数和证书。客户端验证证书后，生成会话密钥并使用服务器公钥加密发送。服务器解密并验证证书，生成会话密钥。双方使用会话密钥进行对称加密通信，安全。
- tcp连接： 客户端发送syn 报文，设置序号x；
  服务器回复syn+sck 报文，设置序号为y；
  客户端再发送ack报文，设置序号为y+1；进行回复，这时候两者建立会话连接
