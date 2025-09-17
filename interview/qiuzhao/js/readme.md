## promise 静态方法，批量多个promise 
- promise.allSettled() 等待都完成，不管结果成败
  race 等待第一个无论成败
  any 等第一个成功的

## this 指向 
- 谁调用就指向谁
  - 普通函数，指向全局，浏览器 window，node globle
  - 对象方法，obj.fn(),指向对象，
  - 构造函数，new fn()，new 创建空对象，this 指向，执行函数体，返回对象
  - 箭头函数，没有自己的this 
  - call/bind/apply: call 单个参数，apply 数组传入，前两者立即执行，bind 返回新函数，
### 普通函数和箭头函数区别
- 箭头函数，解决普通函数丢this 问题！！
  如：定时器this 默认window，输出undefined，用bind 🫡
- 箭头没有argument ，没有prototype 原型对象，不适合做构造函数，方法做调用
  普通可以
- 普通 this 动态绑定，
  箭头 继承外层作用域this 定义时候固定，没法call 等修改

## http 
### http 缓存
- 强缓存：有效 本地取
  - expires 浏览器本地时间，
  - cache-control，有其他值：no-cache 不直接用强缓存，先走协商；no-store 完全不缓存
- 协商缓存
  - if-modified-since 与 last-modified
    第一次last-modified 带上资源最后修改时间，下次请求带上if- modified-since 
    这个值被last- modified 值赋予，304，否则200 和新资源
  - if-none-match 与 etag  
    唯一标识，etag 
    被if-none-match 带上

#### 缓存位置
- memory cache：内存快容量小，关闭就丢
- disk cache： 持久(图片)

## 浏览器渲染
- 重回重排

## 闭包
- 定义和用法：函数内部可以引用外部变量
  - 看过MDN闭包，这里也加入自己的理解：
  闭包是函数和声明该函数的词法环境的组合，类似一个背包，背包里面装了函数定义时作用域内的变量，函数执行时，背包里的变量可以访问到。相应作用域链不会销毁。这样闭包里面的变量实现 生命周期的延长。
- 为啥有：当然因为闭包有优点
  - 闭包实现封装和私有变量，
  - 场景：比如定时器，事件回调，函数节流防抖
- 用了有啥问题：
  - 闭包因为延长了变量的生命周期，导致内存泄漏
  - js 垃圾回收机制 回收不了  
    闭包变量会常驻内存，引用计数+1
  - 内存泄漏

### 内存泄漏 检测和解决
- 检测：chrome 开发者工具（能定位到代码位置，不能定位试验开发者工具）
  - 内存面板
  - 快照
- 解决：
  - 及时释放，null
  - 定时器使用后及时清除，clearTimeout clearInterval
  - 及时移除事件监听，removeEventListener
  - 处理循环引用，weakMap 弱引用

## 存储
### 本地存储
- localStorage 永久存储，5mb
- sessionStorage 会话存储，5mb，关闭浏览器就清空
- cookie 4kb，请求头携带，
  - 安全性：httpOnly，secure 不能通过js 访问
  - 过期时间设定：max-age
  - document.cookie 存储，示例：`document.cookie = 'token=123;max-age=3600;path=/'`

- indexedDB 浏览器本地数据库
  不像localStorage 存的是字符串，indexedDB 存的是结构化数据

- 了解缓存：redis 内存数据库
  - 高性能，有持久化，集群，
  - 场景：在热点数据缓存，排行榜，分布式锁（解决并发）等

### 浏览器缓存 http  缓存
  - expires 过期时间
  - cache-control 优先级高
- 协商缓存
  - last-modified if-modifed-since
  - etag if-none-match
  - 优先级：last-modified > etag > 强缓存

###  xss crsf 攻击
- xss 跨站脚本攻击
  - 原理：用户输入的内容被浏览器解析执行
  - 防御：转义字符，httpOnly，contentSecurityPolicy CSP
- csrf 跨站请求伪造
  - 原理：用户登录了A网站，cookie 被浏览器保存，访问B网站时，B网站请求A网站时，cookie 携带
  - 防御：token 验证，验证码

## 登入鉴权
### 登入流程：
- 
- 登入方式：sessionStorage 本地存储，cookie 服务器存储
- 鉴权：token 验证，验证码
- 登出：清除本地存储，cookie

### 跨域 业务环境：线上/线下（功能层面）
- 同源策略，浏览器安全，限制跨域进行资源访问
  测试，生产环境，协议，域名，端口不同，浏览器会拦截
  - 前端始终请求 /api 接口，不用关系具体目标服务器
  - 开发环境使用 vite 代理，这里对比过jsonp 
    - 代理，支持所有http 方法，跨域处理404，500等状态码，jsonp 只能get，不能处理404，500等状态码
    - 代理不依赖后段返回可执行的 js 代码，并且支持json，formData等数据格式
    - 代码安全性更高
  - 生产环境： nginx 反向代理
    - 隐藏真实服务器信息，统一域名【前端和API 都在同一个域名下】
    - `负载均衡`,多个服务器分摊流量
    - 了解：cors 跨域资源共享，API 服务器配置cors 头
      - 后段提供具体cors配置，和允许的域名和请求头
      - 后段OPTIONS预检请求处理
      - withCredentials: true 是前端告诉浏览器"我要发送cookie"，
      但真正允许带cookie需要后端配置 Access-Control-Allow-Credentials: true
预检vs普通
- 浏览器发送预检，服务器返回允许的方法、头部等；预检提供浏览器发送实际请求，返回业务数据
- 预检触发：
  - 非简单：put，delete，patch等
  - 特殊content-type：application/json、application/xml等
】
### 请求：ajax fetch axios
- ajax 是异步js 和 xml 的组合，
  使用XMLHttpRequst 对象和服务器异步通信，局部刷新
- axios 底层是封装xml，提供更多功能：
  默认携带cookie，做拦截器，统一处理错误和请求；
  支持自动转换json，内在超时机制（timeout）
  `支持取消请求（cancel）`
- fetch 底层是promise,浏览器原生支持，语法简单
  - 默认不带cookie，需要手动设置 credentials：'include'
  - 遇到错误状态码不会抛出，需要手动处理 response.ok
  - 没有中断请求和超时机制，需要手动设置 timeout

## React 
- useMemo 缓存计算结果
  比如：很大的列表筛选，只有当list 列表变化时，才重新计算
- useCallback 缓存函数引用
  - 比如：父组件传入子组件函数，子组件使用useCallback 缓存引用