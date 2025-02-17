### 字节戴第一场字节面试准备
- 基于学长的三个（两）项目
- promise.all
  - fs.readFile(path, callback) 20%-30% 性价比
    node 异步无阻塞 no blocking
    v8 引擎，性能（服务器并发请求，服务器集群，程序中间件执行
  - I/O 异步 按顺序读取文件
    异步不好控制执行顺序
    - callback err data
    - 后端要求安全，稳定
  - 回调地域：使用回调解决异步回调问题，但是 可读性 不行
  - es5 callback es6 promise es8 async await 
    js 异步解决方案
    早期业务简单 
    可能不需要优化异步操作了，

- 多个异步任务，all 
  - promise.all 接收数组作为参数，每个元素是promise实例
  - 所有执行 成功 完成，才返回结果；按照顺序返回结果
- race 赛跑 耗时短先完成，第一个执行完成，不管成功还是失败
  allSettled 赛跑，所有执行完成，不管成功还是失败，返回结果
- any 返回第一个成功

- 异步并行
  