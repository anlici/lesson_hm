## xss crsf
- xss 页面注入恶意脚本，在用户的浏览器中执行，窃取用户数据或进行其他恶意操作。
  XSS 攻击通常发生在同一站点内，比如攻击者通过评论区、表单提交等方式将恶意脚本注入到页面中，当其他用户访问该页面时触发攻击。
  - 输入校验,是否
  - 避免html里面直接嵌入script，对script进行编码或转义，然后输出到页面中
  - httpOnly cookie；secure cookie 避免cookie被第三方网站窃取
  - csp 头部
- CSRF（跨站请求伪造）是指攻击者诱导用户访问一个恶意网站，然后利用用户在目标网站上的登录状态，向目标服务器发送伪造的请求（如转账、修改密码等）。
  - samesite cookie
  - 验证请求来源
  - 验证码

- 钓鱼网站和 CSRF 的核心区别在于，CSRF 利用了用户的登录状态，而钓鱼网站是通过欺骗用户主动提供信息。

## html 和 静态资源区别
- 
- HTML 是网页的核心结构文件，定义了*页面的内容和资源加载方式*。它可以是静态的，也可以通过后端动态生成。
- 静态资源（如 CSS、JS、图片等）是用来*增强页面的样式和功能的辅助性文件*，通常直接存储在**服务器或 CDN** 上。
- 在实际开发中，服务器负责提供 HTML 文件和静态资源的访问服务。对于动态页面，服务器会根据**请求生成对应的 HTML 内容**；而对于静态资源，服务器则直接返回文件内容。
- 为了提高性能，静态资源通常会部署在 CDN 上，以减少服务器压力并加快资源加载速度。

## 知识点规划
- ts 基本类型（泛型有哪些？），css 三角性，布局
- js 类型转 == 
- 作用域和 作用域链，闭包，原型和原型链，**this**
- 防抖节流
- 事件循环
- defer async 

- 408：http https 状态码（307 308），tcp 三次握手
- 浏览器缓存，存储，service worker
- 跨域
- 跨域解决方案

- typeof 和 instanceof，判断数据类型还有哪些方法
- new 关键字手写
- 性能优化
- 字符串出现次数 最多公共子串
- git rebase merge 了解多少？
- 浏览器渲染原理
- **重绘重排**
- 快排
- 首屏优化：
  - 白屏：骨架屏，渐进式加载；react-contend-loader svg 的

- null underfined 区别，怎么检查？
  - underfined 声明了未赋值，或者对象不存在
  - null 空值或 无对象；常是开发者自己设置，表示一个空对象
    清空对象（内存泄漏） 或某个值为空
  - null 能json 系列化，underfined 不能
- null == undefined // true
  null === undefined // false

- flex 布局和grid 布局区别；
- 手写扁平化，数组去重； 
- object 遍历，出对象；
- 判断两个对象是否相等，递归，深浅拷贝
- **bfc** 怎么实现
- border-box 和 content-box 区别,border-box 好处？ 

- promise 原理，promise.all 
- promise.race,**await** 原理
- yeild , async

- ref reactive 
- proxy 和 object.defineProperty 区别
- watch 和 computed 区别，watchEffect
- vue3 响应式原理
- vue3 上面周期
- 2 3 区别
- v-model 和 v-bind，实现底层
- 轮播组件怎么实现
- 前端做动画怎么做


- react 虚拟dom 原理
- react fiber 原理（fiber 树，动态更新，可以中断，处理优先级高的）
- react 状态管理：useState useReducer useContext useRef
- react 生命周期（16 18）
- react 路由（react-router-dom）
- react 性能优化（useMemo useCallback）
- react 事件处理（**合成事件，事件委托**）****
- react 高阶组件（高阶组件是什么，有哪些，怎么实现）
- setState 优化？
- react 不同版本
- react 底层

- 输出题
  - 并行串行
  - ****
- 代码分析
- 算法
  - 二叉树路径和
  - 最长不重复字符
  - 

- 项目场景
  - 1. 项目中间层抽离做什么，有没有什么思考？
  - 解耦  将通用能力（请求拦截、日志收集、权限校验）从业务代码中剥离
  - 1. 能不能把公共中间层中，针对每个项目的功能设计成可插拔的插件，有没有见过这种架构
    1. Vue CLI 的插件体系
    1. Webpack 的 loader/plugin 机制
    2. Babel 的 preset/plugin 方案
    3. VS Code 的扩展系统
- JWT token相比正常token的区别，为什么更安全？使用cookie和localStorage存储相关密钥的实现
- 4. 减少打包体积方法
1. CJS和ESM区别
2. 原子化css实现label的样式由同级的input决定
3. ts泛型（ts比喻成js，泛型就是传递的参数，但ts操作的是类型（字面量/联合类型等）不是值
4. ts怎么函数重载
5. 白屏返回502排查思路？再从服务端的角度，比如说从网关的角度，他有可能会发生什么问题？
6.  经典for循环使用var里面setTimeout打印，然后让我改成同步任务的形式（写了个队列用回调触发下一个
- 算法题：课程表2（思路是这个，题目是模块的依赖关系，给的数据结构是对象不是数组）


1、文档流是什么。常见的文档流
- 排列顺序，决定元素在页面中的位置和大小。
- 从左到右，从上到下。
2、块级元素、行内元素
- 块：独占一行，高度由内容决定。
- 行：在一行中排列，高度由内容决定。
3、脱离文档流
4、absolute和fixed
- absolute 相对于最近的定位祖先元素，
- fixed 相对于视口，固定位置
- 都脱了文档流，
5、重绘和重排
6、怎么减少重排
- 文档碎片，documentFragment
- 脱离文档流，float，position:absolute，position:fixed，
- 批量操作，比如使用cssText，
- 使用类名后再统一操作，
- will-change ，transform ，opacity ，visibility ，display:none，优化
7、promise的api
8、promise.all和allsettled
- allsettled 返回所有promise的状态，不管成功还是失败
9、箭头函数
- es6 新增，箭头函数没有this，箭头函数没有arguments，箭头函数没有原型
- 箭头函数不能作为构造函数，不能使用new
- 箭头函数不能作为**生成器generator函数，不能使用yield**
- 
10、计算属性和watch 
- 计算，有缓存，适合复杂计算；
- watch 适合监听属性，触发副作用，适合简单计算。
- 
11、vue2和vue3的区别
    1. 响应式原理
    2. 生命周期
    3. ts
    4. 组合式 选项式
    5. 
12、响应式原理和diff算法
- vue、react diff 核心目的一样，实现有不同
  - vue diff 算法在patch 过程，根据节点类型和属性变化，进行不同的操作
  - react 递归，结合memo 等控制算法重新渲染；使用合理key 进行识别节点
    - key 唯一、稳定（不用数组索引）、避免频繁操作
  - vue 对组件依赖收集更细致，准确判断是否需要重新渲染。
    diff 优先复用已经有的节点，减少dom操作
  - react 通过key 优化列表渲染，快速识别节点，减少dom操作
13、浏览器本地缓存 √ 
14、怎么实现懒加载和无限滚动的 getBoundingClientRect √
15、防抖和节流的区别 ：防抖，减少频繁操作；节流，减少请求次数
16、虚拟列表。怎么做。不定高度的虚拟列表怎么做：拿到元素的宽高继续计算 
-   使用缓存对象存每个列表高度，先给预设高度，初始渲染后，更新实际高度；
-   虚拟列表：只渲染可见区域，以及小部分列表项；减少dom节点数量；
-   定高，计算每个列表项的top值，然后设置transform；
-   无限滚动，滚动到底部，计算当前，加载更多数据；
-   
- websocket 全双工，半双工
  - **半双工**：双方发生和接收数据，但是不能同时接收和发送数据；**相当对讲机**
  - 全双工：双方发生和接收数据，可以同时接收和发送数据；**相当于电话**
  - 单个tcp，全双工（websocket），
  - sse 在服务端设置响应头：
    - Content-Type: text/event-stream，告诉 客户端服务端将持续发生事件流
    - Connection: keep-alive 保持连接
    - Cache-Control: no-cache 必须先得到服务器验证有效
  - 客户端：
    - 监听事件源：EventSource(url)
    - 监听事件：addEventListener('message', (event) => { console.log(event.data);})
17、组件库select有没有了解到被父层级遮挡，antd。
- 通常因为z-index 、 overflow: hidden 等属性导致。
- 有个属性getPopupContainer 。把下拉框 挂载在body上。
18、性能优化怎么做的。顺带问了defer和async。js依赖怎么顺序加载。
19、大学里最有成就感的一件事
20、为什么选择前端
21、AI对前端学习有什么改变
反问：用到的库可以去了解它的底层实现，遇到性能问题可以去看底层的实现，构建工具比如vite的热加载，各个底层的实现，拦截和实施。可以利用AI去学习。

- 延迟加载策略，懒加载
- 如果图没有加载，预先加载，提前距离；
- 为啥选择 tailwindcss，postcss ；less sass 
  - 原子类，组合后样式
- 优势，端适配？
- css in js， 
- fcp 全部加载完，首次内容绘制，
- 怎么看fcp 知道比较合适？
- 定时器延迟：
  - 服务端秒杀开始，前端倒计时展示
  - performance.now() 获取当前时间，再计算时间差,
  - web worker 处理定时器任务，避免阻塞主线程；当到达时间后，通过postMessage 发送消息给主线程，主线程再更新UI
  - setTimeout  ，js单线程 
- 登入，怎么判断用户密码正确?
- md5 加密，
- 
- webscok 返回数据和post 一样吗？
- 怎么实现一个轮播组件？


## 心态和组织规划
- 我可以面上字节，后面怎么安排暑期实习时间，那面过再说
- 我需要争夺更多的是荣誉，而不是金钱
- 组织：
  - 八股 每个自己录音，进行回答
  - 八股按照公司部门情况进行强化
  - 算法，手写题，默写出来
  - 项目：
    -  尽量完备整理项目里面的技术点，自己讲一下
    -  
- 面试：
  - 微笑 
  - 中气十足
  