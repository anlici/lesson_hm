## 常见HTTP状态码
- **1xx 信息响应：**
  - 100 Continue：继续请求
  - 101 Switching Protocols：协议切换 
    webSocket

- **2xx 成功响应：**
  - 200 OK：请求成功
  - 201 Created：资源创建成功
  - 204 No Content：请求成功但无返回内容 
    4 就没了

- **3xx 重定向：**
  - 301 Moved Permanently：永久重定向
  - 302 Found：临时重定向，url  变化
  - 304 Not Modified：资源未修改，使用缓存
  - 307 Temporary Redirect：临时重定向，方法不变
  - 308 Permanent Redirect：永久重定向
- **4xx 客户端错误：** 【服务器扇3 ，狮子4 没了，老5 不允许】
  - 400 Bad Request：请求语法错误
  - 401 Unauthorized：未授权，需要身份验证 1个token
  - 403 Forbidden：服务器拒绝请求 
  - 404 Not Found：资源不存在
  - 405 Method Not Allowed：请求方法不被允许

- **5xx 服务器错误：** 
  - 500 Internal Server Error：服务器内部错误
  - 502 Bad Gateway：网关错误
  - 503 Service Unavailable：服务不可用
  - 504 Gateway Timeout：网关超时

## AI 实时
### sse
- 基于http协议，实现服务器推送，单向通信
  能够自动重连，不需要客户端轮询
  开销相比websocket小
- 场景：进度条、聊天、实时数据
- 浏览器支持 ：
  - fetch：原生支持流式处理 stream
  - axios：浏览器环境中不支持stream类型，需要在请求头配置accept: text/event-stream

###  webSocket 全双工
-  全双工，客户和服务同时接受和发送数据
- 支持跨域，基于 http 协议
  确认服务器正常运行后，握手完成http 升级协议
- 服务器返回101 状态吗

- 容错机制：
    - ‘心跳机制’，客户端定时发送心跳包，服务器收到心跳包后回复心跳包
    客户端如果一段时间没有收到服务器确认包，关闭连接
    - 消息队列和重发：连接成功发送队列消息，失败断开连接后，重新连接时，发送队列中的消息。

## 进线称 一个页面打开是开了个进程吗？
- 现代浏览器：多进程架构
  - 主进程：控制页面，用户交互
  - 渲染进程：解析渲染页面，`js执行`
  - GPU 进程：3D 绘制
  - 网络进程：网络资源加载
  - 插件进程：管理插件
- 线程：
  - 主线程：js 执行，dom操作，样式计算，布局，绘制
  - 渲染线程：解析渲染页面
  - 合成线程：合成图层，绘制页面
  - 事件线程：事件循环
  - 定时器线程：定时器回调
  - 异步线程：promise，async/await
### js 耗时在主线称，怎么做
- web worker ，处理完postMessage 给主线程
- 时间切片+requestIdleCallback 
  当时间后让出控制权，在空闲时执行回调函数
- await 异步，给到进度条