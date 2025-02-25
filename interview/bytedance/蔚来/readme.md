## 计算机网络
- dns domain name system 域名解析系统 
   是域名转换成IP地址（不好记忆）的分布式数据库系统
- cn/com/net 顶级域(域提供商) 根域 .
- chrome://net-internals/#dns
- ipconfig /displaydns 显示dns缓存

- 浏览器缓存 -> 操作系统本地缓存 程序dns共享
  -> 查询本地dns 解析器（上网提供商 移动 联通） -> 
  递归查询dns 省-市
  顶级 .com .cn .net 拿到ip
  本地hosts 文件 127.0.0.1 www.baidu.com
  将域名映射到特定ip ，允许本地开发、屏蔽完整、

## 白屏时间
- 性能优化 First Piant Time，seo 
- 浏览器从 响应用户输入地址，到浏览器显示内容的时间
- onload 加载事件，domContentLoaded 事件(html+css 加载完)
- 白屏时间 = 页面开始展示时间点-开始请求时间点
- dns解析-> tcp链接（ip地址三次握手，四次挥手）
- ip：7层osi的网络层
- tcp：传输层
- tcp： 握手
      - syn：请求同步包，
      第一次：客户端发生syn 包并进入syn_sent 状态,
      二：服务器收到syn 包，发生syn+ack 包，并进入syn_recv 状态
      三：客户端收到syn+ack 包，发生ack 包，进入established 状态
    挥手：
      - 客户端：向服务器发送fin包，请求关闭连接
      - 服务器：收到fin包，发送ack包，并进入close_wait状态，表示收到关闭连接
      （此时还可以发送数据，服务端等待应用层关闭连接后才完全关闭tcp连接）
      - 服务器：同意关闭，进入last_ack状态，向客户端发送fin包，请求关闭连接
      - 客户端：收到fin包，发送ack包进行回复，进入closed状态

- ios：物理层mac地址
  数据链路层：arp协议，mac地址，数据桢传输
  网络层：ip协议，ip地址，数据包传输

## 控制白屏时间
- seo优化，搜索引擎 重视页面加载速度和用户体验
  性能监控