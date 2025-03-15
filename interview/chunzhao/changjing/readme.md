## filterType
- 除了null typeof 靠谱；
  数组判断 Array.isArray()

## event loop
- js 事件循环的一种机制。
负责**执行异步代码并且管理调用栈与任务队列之间的交互**，确保异步操作
  如定时器promise、I/o zhix1
- 循环
  同步 清空执行栈 -> 微任务队列（一次清空） -> 宏任务队列（一次清空）
  -> 进入idle伺服状态 

## 微任务 机制怎么产生？
- promise 队列 FIFO
- mutation observer 监听dom 变化，当dom 变化时，执行回调函数，回调函数执行完毕，再执行微任务队列
- process.nextTick()

- 执行栈
  - 在新的作用域放入全局作用域

- 宏任务
  - i/o 后端请求
  - setImmediate 队列
- node 的eventloop
## 列表转数字，数字转列表
- 
## 127.0.0.1 www.bilibili.com
- 实现映射

## 从域名解析到dns 
- 域名解析系统
- 输入url www.bilibili.com
- 先检测hosts 
- 浏览器本地缓存
- 117.21.183.142 ip地址
  多个ip地址，dns 轮询，负载均衡；
  实现并发，分布式缓存，内容分发网络
- cdn 域名解析
- 负载均衡服务器：负载均衡算法，计算最佳服务器选择
  机房，多个ip 设置部署服务器集群 
- 路由器（运营商服务器）
- 根服务器 .com .cn 权威机构，一定有备份域名
  tcp 连接