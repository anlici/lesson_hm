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