## 25 春招
- 项目亮点
  - 数据可视化，3d地球（three.js）
    导演视角 camera scene(materail+model模型)
- ref 简单响应式，ref 绑定dom 元素；组件实例，调用
  浅显

## 场景题
- typeof 除了null 其他简单数据类型都能获取正确类型；除了函数，数组 其他复杂判定是对象 
  Array.isArray() 判断数组
  installof 对象
  object.prototype.toString.call() 获取类型
- 
## 跨域？为啥出现跨域？怎么解决？
- 跨域的原因：同源策略，浏览器为了防止跨域攻击，不允许跨域访问
  当不同源，比如：不同协议，不同域名，不同端口，浏览器为了安全，防止buffer中，不会发送请求，直接返回跨域错
- 发送请求双方交互：客户端和服务器通信，客户端发送请求，服务器接收并且返回响应，客户端访问不同服务器资源，浏览器通过同源策略阻止请求
- 解决：
  - jsonp：利用script标签，不受跨域影响，通过src属性发生请求，通过回调函数获取数据
  - cors：通过响应头设置access-control-allow-origin，允许跨域访问
  - proxy：代理服务器，代理服务器转发请求，解决跨域问题
  - websocket: 不受同源影响，是客户端和服务器之间双向实时通信的协议（流式输出）;通过ws:// wss:// 协议建立连接，绕过同源限制
  - document.domain：子域和fuyu.com 同源，子域和fuyu.com.cn 不同源，设置document.domain，子域和父域共享域名，解决跨域问题
  - postMessage：通过window.postMessage()方法，发送信息，通过onmessage事件接收信息，解决跨域问题

- http 的content-type 有哪些值的类型：
  - 文本类型：text/html text/plain（纯文本） text/css
  - json: application/json json数据
  - 表单：application/x-www-form-urlencoded 普通表单提交
  - 文件：multipart/form-data 文件上传
  - 自定义类型

- json 与 表单区别：
  - json：轻量级数据交换格式，易于机器解析，前后端数据交换
    以数组或对象形式，通过key-value对传递数据
  - formData：通常构建普通表单aplication/x-www-urlencoded 或 multipart/form-data格式，用于文件上传，表单提交
    使用formData
    
## 微任务
- process.nextTick() 优先，在当前操作完成后立即执行，不会进入事件循环的下一个阶段
- setImmediate 优先，回调会再当前事件渲染结束后、进入下一个事件循环前执行。

## 前端模块化怎么理解？
- CommonJS和ES Module有什么区别？
  怎么理解ES Module偏静态？
  ES Module的加载顺序是什么？

- 前端模块化：
  - 避免全局污染，前期使用IIFE 立即执行函数（隔离作用域），避免全局变量污染
  - 按需导入导出，模块化组织代码，明确模块之间关系
  - 代码组织：按功能拆分文件，利于维护
  - 按需加载，动态导入提升性能

- commonjs 和 es module
  - commonjs：nodejs 模块化规范，nodejs 默认模块化规范，使用require导入模块，使用module.exports导出模块
  - es module：浏览器模块化规范，使用import导入模块，使用export导出模块
  - commonjs：运行时动态加载，属于动态模块，能够在条件加载；
    值传递通过值拷贝（浅），顶层this 指向当模块
  - es module：编译时静态加载，属于静态模块，不能够条件加载；
    值传递通过引用传递（深），顶层this 指向window

- es module 静态：
  - 在引入文件顶部，执行前解析所有import/export语句，解析完成，执行文件代码
  - 打包工具（webpack）：提前分析依赖，进行tree-shaking，减少代码体积，减少请求数量，减少加载时间
  - 实时绑定：导入是动态映射，修改导出影响导入

- type: "module" 设定module
- es module 加载
  - 解析：从入口文件开始，递归查找所有import语句，解析所有依赖，生成依赖关系图
  - 下载：现代浏览器并行下载所有模块（无阻塞）
  - 执行：深度优先后续遍历，从底层依赖开始，到入口文件
  - 单例特性：同一个模块只执行一次

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