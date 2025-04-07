## 图片懒加载
- 优化：不能无限并发
- src -> data-src
  onscroll 监听 
  截流
  图片是否在可视区：
    getBoundingClientRect()
    intersectionObserver

- getBoundingClientRect()
  - onscroll 监听
  - 截流
  - 处理函数， getBoundingClientRect() top<window.innerHeight
  - count++ 判断是否移除scroll imageList filter 清除

- interSection
  - li 监听，采用事件委托，冒泡机制，event.target.tagName === 'IMG'
  - IntersectionObserver 异步监听教程状态，不阻塞主线程，性能优化
    后台监听，状态触发时回调
    getBoundingClientRect() 手动计算，频繁调用影响性能
- 观察者模式
  - 一对多的依赖，当一个对象状态改变，依赖多个观察者手动通知并自动更新
  - 观察者模式观察者和被管存在**直接**交互；notify 通知所有被观察者
    订阅者有个调度中学，**间接通信**; eventEmitter 实例一个进行，
- 场景：
  - 观察者：
    数据绑定：vuejs 响应式系统
    监听：按钮点击触发多个事件
    状态：redux 状态更新通知
  - 订阅者：解耦了，异步触发
    nodejs里面eventEmitter
    分布式系统，消息队列异步通信，kafka
    跨模块通信，全局事件总线
    实时通知，消息推送
    
    
- vue 中图片懒加载
  - 不能dom编程 使用img 标签，使用vue 自带指令；v-if v-lazy
  - 
- cssom 样式表结构： css object model css 对象模型
  每个css 规则 对应一个对象
- render tree 渲染树：dom + cssom 

## 面题4.6号 16点-17点
### 对象声明
- 对象字面量，{} 包裹
- new 关键字和构造函数，多个
- Object.create() 能基于现有对象proto，指定原型对象
### this 指向
- 通常指调用该对象的方法实例，普通函数
- 箭头函数，this 指向声明时，所在函数的this
- call apply bind 显
  区别：call apply 立即调用函数，参数一个是逗号、 bind 返回函数，可以传参，不立即调用
  call 适用参数固定或比较少的情况，apply 参数多，参数是数组
  bind 时候延迟执行，事件处理函数
- promise 通过new Promise() 创建，then catch finally，接收执行器函数executor
  回调地域
  场景：1.异步请求，2.定时器，3.事件处理函数，4.promise（axios 封装，）

## 数组方法
- 增删改查：push pop shift unshift splice（指定位置删除或添加元素）
- 遍历：forEach map（指向回调，新数组） filter（新数组） reduce（累加器函数） for of（值，可迭代对象） for in （可枚举属性，包括原型链，键）
  for in 食堂hasOwnProperty 过滤原型属性
- 查找：find（underfined）  findIndex（没-1） includes（判断是否包含）
- 排序：sort reverse
- 其他： concat join（格式） 
- isArray 判断数组

## es6 新增数据结构
- set WeakSet  存储唯一值的集合，但值必须是对象
- map  WeakMap 存储键值对的集合，但键必须是对象
- TypedArray 和 ArrayBuffer
  用于处理二进制数据，提供对内存的直接操作
- symbol

## 大文件上传
- 切片上传
- 断点续传：分隔小切片，基于已上传；
  是否上传：服务器记录上传状态，例如使用数据库表；
  文件完整性校验：服务器进行合并分片，计算hash（如md5） 校验合并文件和原始文件是否相同
- 秒传、
- 刷新后处理：前端使用本地存储，记录分片信息、当前进度；
  后端校验：前端恢复上传，向后端请求查询已上传内容，后端返回已上传内容，前端合并已上传内容，并继续上传未上传内容
- 进度条
- 优化：
  离线缓存：

## 浏览器缓存
- 会看一下视频