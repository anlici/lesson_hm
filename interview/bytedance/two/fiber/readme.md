## 数据可视化
- 股市变化，怎么实现响应式？
  - 响应式数据，数据变化，自动更新视图
  - echarts 怎么实现，底层是vue吗？

## react fiber 时间切片
- 10万数据，同步代码时间长
  requestAnimationFrame 
  文档碎片
- 组件复杂，响应也复杂，层级深 渲染慢
- 主线程有时间处理其他任务，react 性能优化 

## requestIdleCallback 
- 浏览器空闲时间执行低优先级任务，
- 用户交互，react 16 后 
- 事件分片 复杂组件或大数据响应式业务 更新
- react 组件渲染 生命周期
  暂停当前任务，让主线程有时间处理其他任务，执行下一个周期
  fiber 时间切片
- 负责任务更多，和requestAnimationFrame 冲突，

## rag
- 外部知识库 
  llm 没训练的知识 基于知识问题   公司机密知识

- 知识库 + llm + 硬件 
