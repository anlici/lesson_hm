- 如何开发一个vue项目
  - vite 工程化 
    npm init vite 
  - vue 核心语法（响应式、组件化、指令等）
    前端框架
  - vue-router
  - pinia
  - element3 UI 组件库
  - stylus 
  - axios  ajax 请求封装库·

- app.use
  向vue app 中注册插件  生态
  element3 提供的组件可以全局使用
  - 注意问题 性能
    首页打开就会变慢， 按需加载
  - element3 组件 以el- 开头
  - 不要重复造轮子  70% 常见组件需求

##  项目亮点
- 项目全面使用es6+ 风格
  代码简洁  易读  易维护
- 按需加载vue 组件库element3 ,性能优化，页面加载速度
- 路由
  - 多级路由
    二级路由 path  前面不要 / 
  - path， component , name, meta (路由元信息)
  - 路由懒加载
    最佳用户体验是快 
    按需加载页面级别组件 import函数引入方式 () => import('')
  - 路由守卫 url 记录用户已经访问的页面login?redirect=/home

# web 进行登入
  - http 请求 + 响应简单协议 用户状态
  - 会话？session
  - cookie
    浏览器本地存储
    服务器返回的cookie 会存储在浏览器中
  - 服务器知道这次请求是谁发起，解析请求cookie，所带有的数据
  - 用户携带身份证明
  - avatar

- ref 做dom响应式对象，也给元素或是子组件注册引用
  使得我们可以在父组件访问子组件的实例formRef，