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
- *执行上下文*：函数*调用*时创建
- 变量提升与暂时性死区
  闭包是**由函数及其创建时的词法环境组合而成**，类似于一个“背包”，它包含了函数定义时作用域中的所有变量。即使函数执行完毕，其作用域链被销毁，闭包的作用域链仍然存在，从而延长了*变量的生命周期*。

- 闭包的主要优势在于它可以*访问其词法作用域中的变量，实现封装和私有变量*，同时避免全局变量污染。然而，闭包*也容易引发内存泄漏问题*，常见表现包括函数作为返回值、函数作为参数传递、立即执行函数以及事件处理器等。
- 内存泄漏的原因可能包括*循环引用、闭包引用外部变量、未清除的定时器和事件监听器等*。
- 为了解决这些问题，我们可以使用 WeakMap 或 WeakSet 来处理循环引用，通过 clearTimeout 和 clearInterval 清除定时器，使用 removeEventListener 移除事件监听器，或者手动将闭包引用设置为 null 或 undefined。

### 内存检测和内存泄漏
- 内存泄漏：指程序中已动态分配的堆内存由于某种原因程序未释放或无法释放，
  造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。
  内存泄漏通常发生在以下几种情况：
  - 意外的全局变量：
    全局变量在函数外部定义，生命周期与整个程序相同。
  - 创建闭包时，函数中的变量会一直被保存在内存中，直到函数执行完毕。
  - 定时器和回调函数
  - dom 元素未清除
  - 
- *仔细检查代码*，确保没有意外的全局变量，及时清理定时器和事件监听器。
  避免在不必要的情况下创建闭包，或者在闭包不再使用时及时释放引用。\
- 打开开发者工具，切换到 Memory 面板。获取内存快照，分析内存占用情况。
- 时间线（Timeline）：切换到 Performance 面板，点击 Record 按钮开始记录。
  分析是否存在内存持续增长的情况。

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

## 比较规则
- es6里面，symbol和bigint 不推荐使用new 构建？会报错。
  - 报错：报不能是构建函数
  - symbol 是定义对象唯一属性建
  - bigint 表达当数字超过number 数据类型支持时，使用大整数，使用 BigInt()创建；
  - 最简单：数字后 ‘n’
  - 但是不支持一元加减，10+10n，会报错（number + numbern）


## typeof 和 instanceof
- typeof 对原始类型除null 外，对引用类型除function 外，正确显示
- instanceof 是判断**对象**是否属于某个类，是通过原型链来判断的;
- 当然，instanceof 还可以使用Symbol.hasInstance()判断原始类型是否属于某个类;
```js
class PrimitiveNumber {
  // 静态方法 primitiveNumber 检查是否数字类型
  static [Symbol.hasInstance](x) {
    return typeof x === 'number';
  }
}
console.log(111 instanceof PrimitiveNumber); // true
```
## async and defer
- 两者都是在html解析时异步加载，
- async ，会在脚本加载完成后暂停html解析，立即执行脚本，然后继续解析html
- defer ，绘制html解析完成后，在domcontentloaded 事件之前，加载脚本，然后执行脚本，最后绘制html

4. **Object.is和===的区别？**
Object在严格等于的基础上修复了一些特殊情况下的失误，具体来说就是+0和-0，NaN和NaN。
源码如下：
```js
function is(x, y) {
  if (x === y) {
    //运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    //NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
    //两个都是NaN的时候返回true
    return x !== x && y !== y;
  }
}
```
 
[] == ![] // true 
console.log("true" == true); // false  字符串“true” 转nan

## 继承
- 借助call，父类原型上有方法，子类不能继承
```js
function Parent() {
  this.name = 'parent';
  this.getName = function() {
    console.log(this.name);
} 
}
function Child() {
 Parent.call(this);
 this.name = 'child'; 
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
var child = new Child();
child.getName(); // parent
```
有问题，找对应高点赞的文章；
脑子混乱，写篇文章整理
有激情，代码写的漂亮，
有深度，不要放弃，万里征途才刚开始。

