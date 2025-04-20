## js 与浏览器相关常考题

- 图片懒加载
  - intersection observer
  - getBoundingClientRect + scroll
  - clientHight + scrollTop + offsetTop

- **clientHight + scrollTop + offsetTop**
  - clientHight 可视区域高度
  - scrollTop 滚动距离
  - offsetTop 图片离开父元素偏移量
- 图片占位图
  <img src="" data-src="真正地址" >
- scroll 事件判断图片是否到达视口
  考虑节流
- getBoundingClientRect 获取元素的位置和可视区域
  
- intersection observer 监听元素是否进入可视区域 （html5 新特性）
  实现监听window 的scroll 事件，判断是否在视口，以及节流
  由浏览器的渲染进程在合适的时机异步调用的，当浏览器检测到目标元素的交叉状态发生变化时，会将回调函数放入一个队列中，在渲染周期的某个阶段执行。

- 为啥没有滚动条，但是鼠标还能滚动实现图片加载出现，是实现什么绑定了吗？

## 其他api
. MutationObserver
MutationObserver 是浏览器提供的一个用于监听 DOM 树变化的 API。在前端开发里，动态修改 DOM 是常见操作，而 MutationObserver 能让开发者在 DOM 树的结构（如添加、移除节点）、属性（如 class、id 等属性值改变）或者文本内容发生变化时，触发预先定义好的回调函数。这对于需要实时响应 DOM 变化的场景，像实现自动表单验证、动态更新页面布局等非常有用。

1. ResizeObserver
ResizeObserver 是用于监听元素尺寸变化的 API。当被观察元素的内容区域或者边框盒的尺寸发生变化时，它就会触发回调函数。与传统通过监听 resize 事件来检测窗口变化不同，ResizeObserver 能精确到单个元素的尺寸变化，在开发响应式布局、图表自适应等场景中很实用。

1. Performance API
Performance API 是浏览器提供的性能监控工具，可用于监听页面的加载性能。借助它，开发者能获取页面从开始加载到完全渲染过程中的各种时间指标，例如 DNS 查询时间、TCP 连接时间、DOM 解析时间等。这些数据有助于开发者分析页面性能瓶颈，从而针对性地进行优化，提升用户体验。

## 浏览器缓存
- **强缓存**：
  - expires： 设定过期时间 服务器和客户端可能不一样 
    **http 1.0** 
  - cache-control(bug 修订)
    - http 1.1 默认缓存
    - 服务器和客户端一致
    - max-age：缓存的最大时间 
    - no-cache: 不使用缓存，需要使用协商缓存
    - **private 只能被浏览器缓存，中间服务器不能缓存，cdn**
    - public 可以被代理服务器缓存
    - no-store: 不使用缓存，也不使用协商缓存
    - must-revalidate: 必须使用协商缓存

- 协商缓存：强缓存失效后，浏览器在请求头中携带响应的缓存tag，来向服务器发送请求，由服务器根据这个tag节点是否使用缓存。
- 响应头带上last-modified,客户端携带if-modified-since 请求头，服务器段进行校验
  - last-modified: 最后修改时间
  - 小于最新修改时间，返回最新的资源
  - 大于最新修改时间，返回304，使用缓存
  - etag / if-none-match: 缓存tag
    - 文本唯一标识（性能开销大），内容改变，标识改变，响应头发送给浏览器
    - 浏览器 if-none-match 发送服务器，服务器校验
  - 区别：
    - etag 优先级高于 last-modified
    - etag 精度高，last-modified 只能精确到1s 像疯狂购物，1s 内修改了多次，last-modified 就会失效
    - 性能不同：
      - etag 性能开销大，last-modified 性能开销小
- 缓存位置：
  - 内存 memory cache：
  - disk cache 磁盘：
  - service worker：pwa progress web appliaction 
    离线缓存 类似app


## 渲染进程
- 主线程进行
  - html 字符串进行解析，类型判断，生成dom树
  - css 字符串进行解析，生成cssom树
  - 合并dom树和cssom树，生成render树
  - 布局render树，计算每个节点的位置
- 主现场之外