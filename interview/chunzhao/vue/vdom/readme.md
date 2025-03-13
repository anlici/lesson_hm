## 虚拟dom virtual dom
- 虚拟dom是真实dom 在内存轻量副本
  - 内存中的对象（描述真实dom）
  - 新 | 旧 虚拟dom 使用diff算法 patches 更新真实dom
  - 一次性作用dom 更新dom

- 以下dom 片段的虚拟dom 对象是什么
  具有强大表现力 节点 节点片段 dom树
  type，props，children([]) + 递归（树）
  文本节点直接给文字
  
- 什么时候生成虚拟dom？
  template 编译成虚拟dom 渲染render 成真实dom
  响应式update 数据状态改变 -> 没有虚拟dom -> 重新生成dom -> 整个替换（重绘重排）

- 虚拟dom 生成新virtual dom 内存 比较新旧两个dom
  一次性收集all 修改patches（diff算法计算出新旧dom差异集合）
- vue比较：
  h 函数创建虚拟dom节点，接收标签名、属性、子节点等
  const vnode = h('div',{id:'app'},'Hello vue3')
- react 比较：
  React.createElement(type,props,children)
  
  SSR  

## diff 算法
- 两个新旧虚拟dom 
- patches 补丁:**同层比较**
- type 变化，不再比较子节点
  **直接替换整个节点**（新创建 o(n)）
- 属性比较 o(n)
  
## v-for 为啥设置key？如何减少重绘？为啥key不用index？
- 增删改 **移动**
- ABCD -> BCDA 如果使用index，A和B比较不同，生成新B节点，相当替换整个节点
  而使用唯一id， A先找发现有A，进行移动

```js
function tholle(fn,delay) {
    let timer = null
    let preTime = new Date()
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        let nowTime = new Date()
        if(nowTime - preTime >= delay){
            fn()
            preTime = nowTime
        }
    },delay)
}
```
## token 存储，每次设置吗？
- token 存储在localStorge或sessionStorage中，每次设置
  使用fetch或axios 拦截器，每次请求头Authorization 中添加token
  使用localStorge.getItem('token') 拿到

  全局请求拦截器设置请求头带上token
  let token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
- 存储cookie，设置httpOnly 和secure 属性，浏览器自动携带cookie，不用手动

## 图片懒加载
- 浏览器滚动时，图片出现在视窗内时，才加载图片、
- 延迟加载非关键资源，直到进入可视窗口
- 原始 load="lazy"
- 浏览器 intersectionObserver API
- 滚动事件 scroll getBoundingClientRect()

## http 1.0与http 2.0区别？
- http 1.0：每次请求都使用一个独立tcp 连接，请求和响应之间没有状态，每次请求都要建立连接，关闭连接（三次握手四次挥手）
- http 2.0: 单个tcp 连接可以承载多个请求，每个请求对应一个刘 stream 传输效率高，宽带优化
  多路复用和长连接，降低延迟，提高吞吐量
- 安全：http 1.0：支持https，但是加密部署默认，明文传输，不安全，http 2.0：默认基于https，加密传输，安全

## 部署 Nginx 静态资源，nginx 反向代理
-

## koa 你怎么使用


