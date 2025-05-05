## 静态资源服务器
- 缓存静态资源，减少服务器压力

- url 输入到页面
  - dns 解析，dns缓存
  - tcp/ip 三次握手，建立连接
  - http 请求，请求行 get / 
  - ngnix 负载均衡
    - 反向代理：
      www.baidu.com -> 192.168.1.1:80 80默认服务器端口
      :80 -> ngnix 代理到8080
    - 轮询 算法 
  - server 响应 :8080 -> web 服务器
    ip 地址 + 端口
    mvc
  - HTML 结构到达浏览器
    - http2.0 server push
    - dom tree + cssom tree -> render tree + layout + paint  
      -> 图层
    - link img，script
  - dns 预解析 dns-prefetch 
  
  - 之前访问
  
  - 静态资源 走cdn 服务器，cdn 分布式网络，加速静态资源
  - dns 预解析

- 强缓存


- redis 缓存，服务器做缓存？
- easyshop ai technology pty ltd
- 二进制流传输
  - fs.createReadStream() 可读流 再使用pip 管道流向res -> req client
  - path.join 接收多个路径片段为参数，按顺序进行拼接（window 自动使用 \ linux自动使用 /）
- 网络断断续续
  - 断点续传，range请求头(下载后继续)
  - 长连接，keep-alive
  - 短连接http/1.1 管道同时多个文件传，但是造成队列阻塞
  - http/2.0 多路复用，二进制传输，pipe

- 301 重定向 302 永久重定向 304 缓存
- 浏览器是多进程架构，c++和nodejs写的
  进程通信，下载进程 

### 断点续传
- range 指定字节位置下载，Range: bytes=<start>-<end>
- 206 Partical Content 返回部分内容
- Content-Range: bytes 0-499/1000
- 

简介：一款基于react、raduix、tailwindcss等技术栈搭建的智能购物平台
- 封装useMessage：实现消息
- 基于Auth.js框架完成google国外平台登入鉴权，,并通过阅读Auth.js⽂档实现⽹⻚端微信扫码登录
- 细粒化浮窗组件：实现弹窗全屏、侧边收起、半屏展示，并实现动画效果
- 