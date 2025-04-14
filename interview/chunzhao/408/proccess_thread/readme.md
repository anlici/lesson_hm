## 打开一个页面，为啥有多个进程
- 浏览器多进程架构（Chrome浏览器），稳定和安全，js 单线程
- 每个进程负责不同任务，主进程、子进程、进程间通信等配合页面加载、渲染、脚本等
- 主进程browser process 
   浏览器核心进程，负责整个浏览器生命周期，进程间通信
- 标签页进程 tab process
  每个标签页独立进程，负责渲染标签页的内容
  一个tab 崩溃，不会影响其他tab
- GPU 进程渲染，处理视频和图像，可以释放主进程和其他进程的资源
- 网络进程
  请求资源

- IPC 进程间通信
  进程间通信，多核架构关键
- 消息传递：进程之间通知发送消息进行通信。
  例如,当用户点击链接，标签页进程想无人进程发送请求，进入请求队列
- 共享内存：进程自己共享数据。例如：GPU进程可以访问标签页进程生成像素，
  进行渲染，
  
- 多进程角度理解网页加载和渲染流程 
- setInterval 不精确：
  - 微任务，宏任务
  - 4ms，5层嵌套
  - 失或页面强制调整1s
    - performance.now() 通过时间调整间隔偏差，回调执行，调整之后的回调（不适合第三个页面）
    - requestAnimationFrame 浏览器里面，处理刷新；不受适合影响，但是受到其他元素
    - web worker 线程，主线程忙碌；不受渲染桢率，封装成函数
  
- 重绘重排：
  重排：对布局树的更改，读取
  更改异步重排：更改放到队列，异步，最后一次性重排
  读取：js强制渲染
  过度效果：0 -> 100px 宽度 中间设置读取，transition
  重绘：字体大小，outline，border ，outline不是布局树，
  可见样式。
  布局树节点和dom树，是否一一对应？
  - 有关系，但不是一一对应。display:none,没有布局信息
  - 一个 li 产生多个盒子，块盒子不能自己有内容，需要行盒子
  - 当div 直接写文本，自动有匿名函数

- 闭包？是否内存泄漏？
  - 在一个函数环境中，函数 + 词法环境 = 闭包
  - 浏览器，优化：看是否引用外部环境，再是否建立闭包
  - 内存泄漏：如果后面要用，不是
    应该释放，但是被引用，内存泄漏。
    但是对应的词法环境，
  - 隐蔽的内存泄漏：两个函数在同一个函数中，一个词法环境在有两个变量
    当s1，s2 ，多个函数，

- 栈、堆：栈是变量，执行上下文；堆：对象；
  原始：一般放在栈，放堆里面也可以
- 参数的东西在栈上，
  原始类型没有属性，加了属性，涉及隐私类型转换
  产生字符串实例，临时实例，后面被回收。
  [a,b] = s; 将原生转成字符串对象，
```js
const s = '123'
s.c = '4';
s.d = '5';

const [a,b] = s;
const { c,d } = s;
console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined 加到临时对象
console.log(d);
```

- 手写防抖
```js
// 技能cd 节流，回城 防抖
// 执行第一次
function throttle(params) {
  let lastTimer = null;
  return function (...args) {
    const now = Date.now();
    if(lastTimer === null || now - lastTimer > params.time) {
      lastTimer = now;
      return fn.apply(this, args);
    }
  }
}
```
- intersectionObserver
- 生命周期，mounted，unmounted
- v-lazy 
- 数据类型：简单，复杂，分别，bigint和symbol 是es6新特性
  堆和栈 ， bigint和number 是
- 删除链表重复节点，
  虚拟节点，守卫节点
- vuex 和 pinia 
  - 首先，vuex actions 和mutations ，mutations 函数是同步的，
    单项数据流，使用dispatch 进行分配，commit 进程提醒
  - pinia 更加hooks化，更支持ts ，
  - vuex 2.0，vue3 可以混合使用
  - 
- 双token
  - lex-token>? 
  - refresh-token 在服务器？ 用户无感刷新
  - 
  - 先讲单个token ，cookie，sessionStroge，
    加密，设定邮箱时间，token
- 浏览器生命周期，
  - 深度，prompt 进行ai询问
  - 事件循环，requestAnimationFrame 渲染，空闲时间，
  
- v-lazy 原生使用screte 事件，
  原生，不支持定制性，
  滑动图片，prompt 并发池，加载快，
  大量滑动，防抖节流
  web map 

- 思考量 重定向302，响应头href，location
- 任性，
- ai询问，知道为啥——
- 项目深度：
  - v-lazy 懒加载，
  - KeepAlive 缓存，设置页面，平级，深度？
    配置项有哪些？
  - 双token
  - 大文件
  - 虚拟列表，
  - 浏览器生命周期，
  - 流式输出，sse 和 websocket
    - rag
    mcp
    设计模式
- 事件循环，什么时候渲染？
  条件渲染，桢，16.66ms。像素，resize scoll 方法，按桢渲染，节点？
- event-target？ 事件流？
- 重排重绘，性能优化
  批量修改dom，文档碎片，为啥一次回流？
  文档碎片，减少强制回流，返回null
  离线化，display:none，
- 协商，强缓存，public
- webpack 压缩，vite 区别
- js promise，回调地域，
  一开始是* 
- v-if v-show 哪个先执行？
  - vue2 v-if 先
  - vue3 v-show 先
- 垃圾回收
  - 根节点判断，找垃圾回收，处理垃圾回收
- cookie 到 sessionStroge
  二进制？ cookie 先存储？-> xss crsf

- 强缓存静态资源， js里面出现bug 怎么办
  html 协商缓存后，js 名变化； 打包后 js 有hash 值，
- cdn 
- 单例模式，发布者模式，区别。
  一个类

- 自定义指令，v-lazy loading 
  从url 到渲染整个
- 设计思路，组件，后端工程化

## 心里建设
用户在地址栏输入URL或点击链接。
标签页进程向网络服务进程发送请求，要求下载指定的网页内容。
网络服务进程通过网络获取网页内容，并将其返回给标签页进程。
标签页进程接收到内容后，开始解析HTML、CSS和JavaScript代码，并生成DOM树和样式树。
根据DOM树和样式树，标签页进程计算出每个元素的位置和大小。
标签页进程将布局信息发送给GPU进程，由GPU进程负责实际的绘制操作。
最终，绘制完成的页面被显示在用户的屏幕上。

## url 按下回车，发送什么事情？
- url 检测，纠错补全。有效，进行dns 解析
- tcp三次握手，ssl 握手，https
- 浏览器准备请求（请求头cookie），发送请求get
- 服务器处理请求，redis 或 mysql，反向代理
- 浏览器收到响应头，
- 处理响应头，set-cookie,content-type,缓存时间，状态码（处理错误，重定向）
  keepalive 长连接，connection
- 浏览器收到响应体，来多少用多少
- 渲染，
  - 解析（预处理线程，资源加载，资源描述符 async defer）
    生成dom + cssom 
  - 样式计算
  - layout 布局 
  - layer 分层
  - paint 绘制
  - 主线程结束，后续开始
  - 
- token 解释器
- 渲染：解析，render 树

## http2 哪些升级（1.1 2.0 目前）
- 二进制分帧：拆分帧，设定id，完成一部分，
  - 多路复用，并发执行
  - 1.1 管道化，发生对头阻塞，解决http 对头阻塞
  - 1.1 同一个tcp 通道，2.0 同一个连接通道
  - 请求带上id，
- 头部压缩
- 服务器推送
- http3.0 解决tcp对头阻塞，限制
- 
## 前端缓存
- http 缓存
- 浏览器缓存

- http 缓存
  - 强缓存，
    - expires 是http 1.0 定义的缓存字段，给出缓存过期绝对时间
    - cache-control http 1.1 定义的，常用指令有max-age no-cache s-maxage
      public/private 
      max-age 给出相对时间，单位为秒数。当expires 出现，，max-age 优先级更高
      为了向下兼容，常常同时出现在响应里面
 - 协商缓存：last-modified if-modified-since etag if-none-match
   last-modified 响应头，资源最后修改时间，当浏览器第一次受到服务器返回资源的last-modified
   讲其存储下来，并在下次访问时，带上if-modified-since 发送给服务器，验证资源是否有效
  
- 如果if-modified-since 在指定时间之后资源更新，
  服务器讲更新资源发送给浏览器并返回最新last-modified
  浏览器收到资源更新缓存的if-modified-since
- 浏览器第一次手动服务器返回的etag值，存储下来，等待下次访问资源时带上if-none-match 验证是否过期
- 浏览器缓存，先http请求问缓存，再服务器。先memory cache，再disk cache ，是否命中
- s-maxage 缓存代理服务器，缓存代理服务器缓存的资源，
  在代理服务器，s-maxage 会覆盖max-age，且只在代理服务器生效。

- expires 绝对时间不精准。
