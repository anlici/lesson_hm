## 性能优化
- 渲染：
  - 重绘：样式改变，包括颜色，背景等；重排：位置，大小变化，浏览器重新计算布局，影响其他元素位置和大小
  v8 引擎每次都向渲染引擎发送消息，渲染引擎根据消息进行重绘和重排
  - bad work 
    - 批量修改dom 
        例如：同时添加100样式dom，切换类名或cssText 
    - 文档碎片：document.createDocumentFragment()
    -  脱离文档流进行操作：display:none 再恢复
    - transform 代替位置
    - 缓存布局信息
 

- animation
  z-index
  动画帧：requestAnimationFrame
- 按需导入，懒加载,针对图片
  - 虚拟列表：Animation Frame  
  - SSR
  - 
## 资源加载优化
- 图片懒加载： getBoundingClientRect
- 路由懒加载： 动态加载 () => import() 代码分隔（code splitting） 
- 图片压缩：webp
- h5: intersectionObserver
- 预加载：link prefetch 打开dns通道——分布式id解析，使用cdn进行就近加载
  浏览器空闲加载未来可能需要的资源，缓存资源，减少请求
  使用link 预解析dns  例如：<link rel="prefetch" href="目标资源路径" as="资源类型">
- dns 静态资源使用内容分发网络
- 

## js 优化
- 防抖节流
  防抖：一段时间后只执行一次，如：窗口大小变化，滚动条滚动，
  节流：resize scroll
- web worker 开一个新线程，对高计算密集型任务
- requestAnimationFrame 优化动画
- requestIdleCallback 是浏览器api，空闲执行低优先级任务。
  而react 的fiber 机制，实现可中断渲染和优先级调度。
  
- 事件委托 


## 框架优化
- vue：keepalive 
- react ：react.memo useMemo useCallback
- key ： 列表渲染
## 缓存策略
- localStorge sessionStorge cookie
- 文件缓存： 协商缓存 强缓存

## 网络优化
- cdn 加速，部署静态资源
- gzip 压缩 
- http/2 多路复用 大文件上传
- dns 御姐型 预解析

## 首屏优化
- SSR
- 骨架屏
- 首屏数据预加载 http2.0 server push

## 监控和分析
- 监控：lathose ending？
- performance api 进行监控
  减少首屏js / css 体积

- 白屏怎么办，requestAnistionFrame 优化动画
- lighthouse 监控工具


## 重绘重排
### 重排
- 几何属性：
width、height
margin、padding
border、box-sizing
top、left、right、bottom（对于定位元素）
- 内容相关：
  修改文本内容（如 textContent 或 innerHTML）
- 布局：
  - 布局信息：offsetWidth、offsetHeight、offsetParent
  getComputedStyle
  - 修改display: none 到 block
  - 修改position: static 到 absolute

### 重绘
- 视觉效果：color、background-color、border-color、opacity（透明度）、text-shadow、box-shadow、transform、filter、visibility
