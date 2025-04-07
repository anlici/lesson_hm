## post 和 get区别
- get 幂等请求，一般不对服务器资源影响
  post 不幂等，对服务器资源有影响
- get 请求参数在url中，post 请求参数在body中，post 请求参数在header中
- 安全，长度

## 304 多好吗？
- 搜索引擎蜘蛛，需要更新更加频繁的页面，304 减少被爬取的次数
## http 和 https 是持久化连接吗
- 持久化连接：一次tcp 连接，多次请求，响应，不用每次请求建立新连接
- http 1.1 默认启动持久化连接，http 1.0 默认关闭。服务器个客户端，通过connection: keep-alive 持久化，close 为关闭
- https 基于TCL/ssl 加密，默认启用
  因为需要额外TCL/ssl 握手，持久化性能提升
- http/2 支持多路复用multiplex（一个tcp 连接同时发生多个请求和响应，不用按顺序，减少http 队头阻塞）
## HTTP和HTTPS协议的区别
    HTTP和HTTPS协议的主要区别如下：
    ● HTTPS协议需要CA证书，费用较高；而HTTP协议不需要；
    ● HTTP协议是超文本传输协议，信息是明文传输的，HTTPS则是具有安全性的SSL加密传输协议；
    ● 使用不同的连接方式，端口也不同，HTTP协议端口是80，HTTPS协议端口是443；
    ● HTTP协议连接很简单，是无状态的；HTTPS协议是有SSL和HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP更加安全。
 