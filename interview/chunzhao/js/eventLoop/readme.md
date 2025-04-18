
- 宏任务：script、setTimeout、setInterval、setImmediate、requestAnimationFrame
- 定时器立即执行，而里面回调函数放入宏任务
- 渲染引擎在宏任务之前执行

- 数据耗时：渲染上
  - 重新计算样式，和计算布局
  - 重绘不一定重排，所以重排耗时更大
  - **使用performance 工具 分析时间开销**
  - lighthouse 测试,性能分析
  - 盒模型和位置计算 -> url -> 显示整个页面、
  
- Node.js采用了非阻塞I/O模型，这意味着在等待异步任务（如文件读取或网络请求）完成的同时，JavaScript引擎可以继续执行其他同步任务，从而提高了整体执行效率。事件循环是Node.js的核心机制，它由宏任务和微任务组成。微任务：process.nextTick、promise.then、async/await 后的代码。宏任务：setTimeout、setInterval、setImmediate、requestAnimationFrame（浏览器独有）、script（整体代码）每个宏任务执行完毕后，会立即清空微任务队列，然后再进入下一轮事件循环。这种机制使得Node.js能够高效地处理并发请求，并且由于其基于V8引擎，语言本身性能也非常优越。”