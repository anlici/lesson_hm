## 为啥学前端
- 设计稿，复杂，不在只是简单切图
- 交互效果，性能
- 前端和ai 结合最快，智能体，页面，比如，如果设计一个ai工具，帮助新手对仓库
  - 前端，给到目录模块，关键代码，可以给到图片顺序
    ai 页面，实时回答新手问题，对有关代码高亮提示
    如果更好，可以加上新手学习偏好和难点进度追踪
  - ai 层，大模型rag ，向量数据库(Pinecone) + 文档嵌入 + 语义检索
    代码分析：大模型选择，生成依赖关系图，
    多模态支持：代码理解 + 文档生成 + 图表可视化
  - 数据层：记录常见新手问题，可以做记录，
- 交互引导 → 通过高亮、标注、弹窗等方式引导用户按步骤学习，
  支持随时提问和获得AI解答；进度跟踪 → 记录学习进度，动态调整后续路径。

- Promise的回调函数，Promise.all和Promise.allSettled有什么区别？会用在什么场景？
  all 所有成功，反；allSettled 无论成功， 

设计一个全局捕捉JS运行错误的方案
- window.error 
Errorboundary能捕获到异步错误吗？为什么？如果要做的话有什么方案？
- 不能，errorboundary 只能捕获组件树同步过程抛出的错误
- 全局监听器捕获异步错误，window.addEventListener
- 业务层面用统一的错误处理Hook包装异步操作 useAsyncError

说说原型继承

any unknown never的区别
- any 取消代码检查,回到js
- unkown 更安全，接受任何值，需要断言，强制开发者使用前明确类型
- never 底部类型,永远不会有值的类型，`永不返回`

keyof和typeof的区别
- keyof 拿到对象所有key，`类型操作符`，获取对象类型的所有键名组成的联合类型，用于类型约束和泛型编程
```js
type User = { name: string; age: number };
type UserKeys = keyof User; // "name" | "age"
```
- typeof 判断类型,也是ts中从值判断类型，
  a typeof ‘string’
```js
const user = { name: 'tom', age: 18 };
type UserType = typeof user; // { name: string; age: number }
```

useEffect和useLayoutEffect的区别？
- 异步，处理副作用，**在DOM更新完成后，浏览器会在下一个事件循环中异步执行**，事件监听/定时器/网络请求fetch
执行机制（生命周期
挂载阶段：组件首次渲染后执行
更新阶段：依赖项变化时执行
销毁阶段：组件卸载前执行 cleanup函数

- 同步，`dom 更新后但浏览器绘制前，阻塞绘制直到执行完成`，
适用于**读取DOM布局信息或避免视觉闪烁的场景**，比如测量元素尺寸、同步DOM操作。

事件循环是什么？为什么有事件循环？
- 异步，单纯调用站不足以对任务
  js 单线程，解决并发
- **为了避免阻塞主线程影响用户交互，需要事件循环来管理异步任务的执行顺序**
后续宏任务队列中还有任务，且当前没有紧急的渲染需求（比如用户交互、动画帧），
浏览器可能会延迟渲染，先执行更多宏任务来提高效率。
RequestAnimationFrame的优先级高于普通宏任务，会在渲染前执行，确保动画的流畅性

业务中关注的业务指标和技术指标
- 业务指标：
  - 页面加载时间，lcp；首次加载时间，fcp；交互时间 fid；累计布局偏移
  - 用户页面停留时间，功能使用率
- 技术：
  - 接口响应时间，错误，
- 需要建立技术-业务双向反馈机制

常用的http header
- access-allow- method
- access-allow- header
- set-cookie
- cache-control。这里no-store吗？
- etag

简单请求 复杂请求
- 简单，get/post/head,不进行预检请求（服务器验证客户端有效

强缓存 协商缓存
