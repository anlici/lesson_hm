# 场景
- 有页面，8个元素，做flex布局，
  请计算性能指标渲染总时间和第一个元素渲染完成时间

- 页面显示流程
  dom + cssom = render tree + layout tree + 图层（z-index + transform）

  script 尾部执行
  事件监听 event
- js 主线程 + 渲染线程
- performance.now() 或 devtools 的load event 指标获取
- 第一个元素：performanceObserver 的first-paint或first-contentful-paint事件来测量

## 场景二
- 用setTimeout模拟setInterval 有什么问题
  - 性能差，重复从同步代码到宏任务
  - 同步代码很多，造成浏览器阻塞，其他任务就无法执行
  - 渲染
- promise 实现并发控制
  - 设置并发池，设定池大小，控制并发
  - promise.all 执行选择的全部请求，达到并发池大小
    使用promise.race 执行并发池内请求，返回最快的请求
    
- promise 红绿灯
  - promise.allSettled
- 手写promise.allSettled
```js
function allSettled(promises) {
    const res = [];
    return Promise.all(promises.map((p) => {
        return p.then(
            (value) => {
                res.push({
                    status: 'fulfilled',
                })
            }
        )
        .catch(
            (reason) => {
                res.push({
                    status: 'rejected',
                })
            }
        )
    }))
}
allSettled([])
```
- 手写promise
```js
function Promise(executor) {
    const res = [];
    return 
}
```
- http2.0 多路复用，是不是越多越好？会不会有上限码
  - 
- cursor 和 windurf 用的多吗？占比多少？trae 用过？
