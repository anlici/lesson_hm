### redux-toolkit
- redux 官方推出的工具管理库，简化redux使用
  减少样板代码，通过使用createSlice创建reducer和action，
  使用createAysncThunk创建异步action
        createStore 创建store
        combineReducers 合并reducer
        useSelector 获取state
        useDispatch 分发action
        useStore 获取store
        useReducer 自定义reducer
        useRef 获取dom元素
- context api 内置
- zustand 状态管理库
  - 轻量级，性能高，简单易用，支持ts
  - 中小型，create 获取store 实例，
    使用get set 作为参数返回对象；
    useStore 获取store；
    persist 持久化，middleware 中间件；
    在immer document中，在深度数据修改，不使用immer 
    要求展开运算符，先进行深度复制，再进行修改，
    如果使用immer，直接对待普通对象一样，修改状态

### trpc
- representation 
  - trpc 是一个用于构建 TypeScript 应用的 RPC 框架。
  - rest 状态传输，
    2 个核心
    6 个约束：服务和客户端不用彼此知道
    URL 作为统一接口，客户端 默认get 缓存，post 不会
    前端nginx 代理，后端nginx 反向代理
- rest 移动 动态
- graphql 状态传输，按需获取数据，
  读  query缓存，
  写 mutation 刷新缓存
  数据观察  subscribe
  先操作类型
  query getallTheEggs

- rpc：
  调用函数接口
  proto 
  protobuf buffers 

- grbc 基于http 2 有patch 
  分布式 服务器之间交流
- rpc：前后端使用ts，
  trpc： 

- tcp udp
  tcp 基于字节流，无边界
  加入消息头，进行边际，
  移出http 
  tcp：远程过程调用，
  想调用远用方法来调用远程方法
  tcp 可能粘包问题，
  夏洛特烦劳
  socket 采用
  bind方法
- rpc 指定ip地址，从dns 解析中间服务；
  
- react query 状态管理库
  
