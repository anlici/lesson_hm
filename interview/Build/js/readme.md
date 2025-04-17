# JavaScript 考点总结

## 1. 事件机制

### 事件总线 (EventBus/EventEmitter)
- 发布订阅模式实现
- on/emit/off 方法实现事件的订阅、发布和取消
- 常用于组件间通信、跨层级通信

### 事件委托
- 利用事件冒泡，将事件监听器绑定到父元素
- 减少内存消耗和提高性能
- 动态添加的子元素也能触发事件

## 2. 异步编程

### Promise
- Promise 状态：pending、fulfilled、rejected
- 链式调用：then、catch、finally
- 静态方法：Promise.all、Promise.race、Promise.resolve、Promise.reject
- 解决回调地狱问题

### async/await
- 基于 Promise 的语法糖
- 使异步代码看起来像同步代码
- 错误处理使用 try/catch

### 事件循环 (Event Loop)
- 宏任务：script、setTimeout、setInterval、setImmediate、requestAnimationFrame
- 微任务：Promise.then/catch、process.nextTick、MutationObserver
- 执行顺序：同步代码 → 微任务队列 → 宏任务队列
- 渲染引擎在宏任务之前执行

## 3. 闭包与作用域

- 词法作用域：函数定义时确定
- 执行上下文：函数调用时创建
- 变量提升与暂时性死区
- 闭包：函数和其词法环境的组合
- 内存泄漏问题及解决方案

## 4. 原型与继承

- 对象创建方式：字面量、构造函数、Object.create()
- 原型链与继承机制
- class 语法糖（ES6）
- instanceof 运算符原理
- 继承方式：原型链继承、构造函数继承、组合继承、寄生组合继承

## 5. 垃圾回收机制

- 标记-清除算法：从根对象开始标记所有可达对象
- 引用计数法：跟踪每个值被引用的次数
- 内存泄漏常见场景：
  - 意外的全局变量
  - 闭包使用不当
  - 未清除的定时器
  - DOM 引用未释放
  - 使用 WeakMap/WeakSet 解决循环引用问题

## 6. 模块化开发

- CommonJS：Node.js 使用，同步加载
- AMD：RequireJS 实现，异步加载
- UMD：兼容 CommonJS 和 AMD
- ES Module：ES6 标准，静态导入
- 动态导入：import() 函数

## 7. 文件处理

### 大文件上传
- 文件切片：使用 Blob.slice() 方法
- Web Worker 处理耗时操作（哈希计算、切片计算）
- 并发控制上传

### 断点续传
- 使用 localStorage 存储已上传分片信息
- 上传前检查已上传分片，只上传未完成部分
- 使用 XMLHttpRequest 的 upload.onprogress 监听上传进度

## 8. Web API

- Web Worker：多线程处理耗时任务
- Service Worker：离线缓存、离线访问
- requestAnimationFrame：优化动画性能
- Fetch API：替代 XMLHttpRequest
- IntersectionObserver：实现懒加载、无限滚动

## 9. 性能优化

- 防抖与节流：控制函数执行频率
- 虚拟列表：高效渲染大量数据
- 懒加载：按需加载资源
- Web Worker：将耗时操作移至后台线程
- 使用 transform 和 opacity 属性触发 GPU 加速

## 10. 安全相关

- XSS（跨站脚本攻击）：输入验证、输出编码、CSP
- CSRF（跨站请求伪造）：验证码、Referer 检查、Token 验证
- 点击劫持：X-Frame-Options 头部
- 安全的数据存储：敏感信息不存储在 localStorage
- HTTPS：加密传输数据

## 11. ES6+ 新特性

- let/const：块级作用域
- 箭头函数：简化函数语法，绑定 this
- 解构赋值：简化数据提取
- 扩展运算符：展开数组或对象
- Promise、async/await：异步编程
- Proxy 和 Reflect：元编程
- Map、Set、WeakMap、WeakSet：新的数据结构