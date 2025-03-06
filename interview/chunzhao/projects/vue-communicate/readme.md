## 组件通信
- vue2/vue3 区别
- 设计模式
- vue3 8种，vue2 12种
- 父子组件
  - props defineProps
    两种写法，选项式 组合式（setup）
    setup 语法糖好维护；打破vue2 语法割裂逻辑限制，把响应式数据和方法放在setup中
    setup 方法（选项式） data里 状态，setup 返回响应式
    数据可以作为props 传递给子组件
    数据绑定传参 -> defineProps(类型和默认值 必填) -> 编译器宏函数（defineProps 无需引入 vue3.2 版本开始）

  - emit defineEmits 兄弟组件通信
    **单项数据流** 兄弟组件状态共享 数组状态由父组件控制，父组件通过props传递给子组件，
    子组件通过emit触发事件，父组件通过自定义事件来更新状态
    - expose defineExpose ref 暴露组件实例
      子组件暴露给父组件方法和属性
    - attrs
    - v-model
  
-  跨层级组件通信 共同祖先节点
  - provide inject  告诉其他在某个地方inject，
  - 全局共享状态通信 vuex/pinia
  - 父子传孙，不好；
  - 事件总线？ 订阅发布者 eventBus 
  - 全局事件总线？

## v-if v-show
- 1.v-if 是**条件渲染**，切换触发事件监听器、本身、子组件的挂载卸载
- 2.v-if 是惰性的，初始条件为假，性能更好
- 3.v-show 简单，初始条件是否都要渲染，基于css display切换
- 4.v-show 使用频繁切换条件的场景，v-if 条件很少改变

- 场景
  - 登入弹窗 v-if
  - form 表单 校验 v-show
  - 动画效果 v-show+transition
  - 用户权限显示（user，admin） v-if
## web worker
- web worker 允许主线程创建worker线程，让主线程与worker线程并行运行，主线程与worker线程可以交换信息。将一些计算密集，或高延迟的任务，放入worker线程，以免阻塞主线程。
- worker线程与主线程的通信，通过postMessage()和onmessage()实现。
- 创建worker线程
```js
if(typeof Worker !== 'undefined') {
  var w = new Worker('worker.js')
} else {
  alert('您的浏览器不支持worker')
}
```
- 通信
```js
// 主线程向worker发送消息
worker.postMessage('hello worker');
// 主线程接收worker的消息
worker.onmessage = function(e) {
  console.log('main thread: ', e.data)
}
// worker接收
self.onmessage = function(e) {
  console.log('worker: ', e.data)
  self.postMessage('hello main thread')
}
```


## 路由模式
- hash 路由 history 路由
  使用spa单页面，前端路由：SPA只需要更新需要资源，不会刷新整个页面，减少白屏渲染时间，提高用户体验。
  不用到服务器，减少请求次数，页面在本地快速切换
  一堆扑克 切换 头尾不动，中间router-view 渲染
- 两种路由模式，优劣
  hash 以#开头，兼容性好 #是url 把一部分
  history 支持前进后退，兼容性差，需要后端支持
  https://3000.com/:id 锚链接 
- hash 切换时触发hashchange事件 router 配置
  hash => component 替换router-view
  table 
  hash 兼容性好，刚开始是为了在长页面做锚链接，现在用在SPA
  作为url 一部分，切换时触发hashchange事件，像一堆卡牌一样进行切换
  router-view节点（切换0毫秒），在router 配置里面，url 修改hash，页面 component 替换成对应router-view
  只改hash 不会刷新整个页面

- ios 安卓，不用url；后面前端使用混合式开发
## 10万数据渲染
- event loop
  
