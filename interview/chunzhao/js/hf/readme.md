## 高级函数
- watch / watchEffect 
  watchEffect 自动收集依赖，会自动执行一次，允许多个依赖监听
  有缓存，不会重复执行
  watch(state, () => { }, { immediate: true }) 
  能够设定是否立即执行，是否深度监听，
- es6 filter map reduce
- app.use(async (ctx, next) => {}) 中间件
  按照洋葱模型执行，next()；除非用户中断

## promisify
-  fetch 都是promise实例，
- xmlhttpRequest 也是promise实例;兼容性，底层axios 能够处理更多功能。
- athorization ：

## 刷新缓存
- 先协商304，再强制
- 版本号变化，等资源部署完，再部署网页。vite 里面有hash值，hash值变化，强制刷新。
- 缓存时间：
- 先部署页面，再部署资源：可能这期间有用户访问，用户访问错乱页面，
## 服务器部署
- 前端后端分开部署，浏览器认识打包后的html，css，单页面应用
- 本地部署，nginx部署，云服务器部署；
- 代理：proxy，匹配/dev,

- 本地部署：先给出静态资源，再给出动态资源，
  刷新页面404，ajax请求废了。
- 浏览器刷新后，认为前端url，但是现在后端没有相关路径
- hash路由：#，不能触发后端；
- **无法匹配路由时，返回index.html**
  后端app.get('*',(req,res) => {
    res.sendFile((__dirname + 'index.html'))
  })
- 后端使用connect-history 库，自动重定向到index.html
  灵活，可以配置多个路由，

- 打包完没有脚手架，脚手架有代理服务器，vite
- 但是打包完，需要自己配置代理，http-proxy-middleware
- 局域网可以访问。

- nginx 服务器部署：
- 反向代理，静态资源，高速缓存，ssl/tls，负载均衡，
- 
