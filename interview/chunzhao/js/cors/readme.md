- jsonp 有啥缺点
  - 不安全 <script src="" /> 
    callback(data) 使用xss（恶意脚本） 攻击
  -  get 方法，不能post
     script src 不能发生post 等其他请求

  - script 标签，可能阻塞 页面渲染
  - 不好处理http 错误，回调函数只能成功时调用
  - 现代推荐cors 代替jsonp

- cors 跨域资源共享
  Access-Control-Allow-Origin: *
  服务器设置允许跨域的域名，*代表允许任意域名
  跨域白名单
    - 允许跨域域名数组
    - req.headers.origin
    - indexOf 判断是否包含
    - 服务器设置响应头，Access-Control-Allow-Origin:  origin || *
  Access-Control-Allow-Methods: GET,POST,PUT,DELETE
  Access-Control-Allow-Headers: Content-Type
  Access-Control-Allow-Credentials: true  允许跨域携带cookie
  Access-Control-Max-Age: 86400 预检缓响应存时间

- restful api
  
- 预检请求
  - 简单请求：get post head（用于访问服务器资源头部） 直接发送请求； 
    请求头：Accept，Accept-Language，Content-Language，Content-Type（只text/plain apllication/x-www-form-unlencoded multipart/form-data）
  - 复杂请求：

  非简单请求，通过options 方法验证权限.
  option method方法用于查询服务器上特定资源支持的通信选项，通常用了检查跨域请求是否被允许
    
- websocket 无跨域问题 **消息机制**
  webscoket 默认支持跨域，基于http 协议
  先提供基础http接口，用于确认服务器正常运行
  握手完成使用http 升级协议，再使用websocket
- 预检请求 204 
  升级协议 101 switching protocol
  
- postMessage \(^o^)/
  h5 新特性
  iframe 标签
  一个网页A，嵌入（iframe）另一个网页(如：支付宝B)
  不跨越
- vite 反向代理
  
- 设置只能jwt 验证
  
