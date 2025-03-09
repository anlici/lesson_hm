
- 宏任务：script、setTimeout、setInterval、setImmediate、requestAnimationFrame
- 定时器立即执行，而里面回调函数放入宏任务
- 渲染引擎在宏任务之前执行

- 数据耗时：渲染上
  - 重新计算样式，和计算布局
  - 重绘不一定重排，所以重排耗时更大
  - 使用performance 工具 分析时间开销
  - 盒模型和位置计算 -> url -> 显示整个页面