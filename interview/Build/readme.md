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
- docker部署
  - 编写代码，设定运行环境和依赖，
  - 构建镜像，
  - 运行容器，
  - 配置网络，存储等
## 知识点规划
- ts 基本类型（泛型有哪些？）
  - 联合 交叉 
- css 三角性
  border,border-bottom:10px solid transparent;?
- 响应式布局：媒体media..
- 盒子模型
- js 类型转 == 
  - null underfined 一起时true；
  - 有number，string，先转换为数字，再比较
  - 有boolean，string，先转换为数字，再比较
  - 有object，先转换为字符串，再比较
- 作用域和 作用域链，闭包，原型和原型链，**this**
- 防抖节流   
- 事件循环
- defer async 

- 408：http https 状态码（307 308）
- 浏览器缓存，存储，service worker
- 跨域
- 跨域解决方案

- token 窃取后怎么处理？
  - httponly 并且短期sessionStorage 存储
  - jwt+localStorage 存储，加上refresh token
  - 每次请求access token，过期refresh token先刷新，再请求access token
  - refresh token 暴露，服务器立即撤销，引导用户重新登入
  - 抽离公共组件函数，减少重复代码（比如axios 抽离create 方法，设置请求头等） **oauth2.0 凭证式：**
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
- **bfc** **怎么实现**
- border-box 和 content-box 区别,border-box 好处？ 

- promise 原理，promise.all 
- promise.race,**await** 原理
- yeild , async
  - yeild 在生成器函数，暂停执行并稍后回复，返一个迭代器，next()
    function  *gen() {}
****
- ref reactive 
- proxy 和 object.defineProperty 区别
- watch 和 computed 区别，watchEffect
- vue3 响应式原理
- vue3 上面周期
- 2 3 区别
- v-model 和 v-bind，实现底层
  - v-model :value 和 @input 事件；
  - v-bind ： 传递属性给子组件props，
- 轮播组件怎么实现
- 前端做动画怎么做
- hooks

- react 虚拟dom 原理
- react fiber 原理（fiber 树，动态更新，可以中断，处理优先级高的）
- react 状态管理：useState useReducer复杂状态管理swaich useContext（减少跨城props传递） useRef（可变引用对象）
- react 生命周期（16 18）
- react 路由（react-router-dom）
- react 性能优化（useMemo 依赖项计算 useCallback 回调函数）
- react 事件处理（**合成事件，事件委托**）****
- react 高阶组件（高阶组件是什么，有哪些，怎么实现）
- setState 优化？
- react 不同版本
- react 底层
- React hooks 实现源码底层逻辑；


- 输出题
  - 并行串行
  - 多次操作，执行最后一次操作
    - // 闭包，索引 
        // 取消请求， 使用 AbortController
        // 防抖

- 代码分析
- 算法
  - 二叉树路径和
  - 最长不重复字符
  - 

- 工具
- 知识库，prompt，长文本记忆；
- 浮窗组件，比如怎么使用，
- 怎么性格的人，怎么学习，怎么解决问题；
- 技术方面，打算怎么发展？
- 虚拟dom 概念；
- 一个根节点，请求修改数据，子组件会跟着一起修改吗？
- 后端交互，封装axios，怎么封装？
- 接口交互，接口工具，apifox
- **restful api 和 http1.1 有什么特点**，
  - restful api，本质就是一个动词，6种状态，get post put delete patch
  - resful 标准化，命名规范，请求包含上下文（如token+资源标识）
  - 数据格式也是统一，json/xml,
  - http1.1  适合强操作性，rpc操作方法随意（如get去操作删除数据，url命名也随意，如/get_data）
- mock 数据怎么模拟？
  - 模拟数据，使用函数写请求
  - mockjs，生成随机数据和拦截ajax 请求
  - json-server 快速搭建restful api 服务
- bigint；多位数，bigNumber；
- nextjs 干啥的？
  - 服务端在渲染，方便seo优化，并且每次客户端不用再解析；
  - 水合操作，
  - SSR，SSG，
  - 基于文件系统实现自动路由，page目录下创建对应文件，就会生成路由
  - api目录下，就能构建后端api接口
  - 代码分隔，懒加载等优化。
- 问了同步是什么情景，那一定从了解的定时器、promise、async await开始分析

- setState ，异步操作？什么时候同步？
  - 异步：多个合并到一次更新，**性能考虑**
  - 更新状态为最新：回调,promsie,setTimeout,
  - **同步情景：原生dom操作，定时器（到了时间执行），promise回调**
- **不用状态管理库，怎么实现？useState,useReducer,useContext,useRef**
- useState 简单，useReducer 复杂逻辑。
- useReducer 做到状态更新逻辑集中管理，相比useState减少重复渲染
- *useReducer 通过比较action 精准控制状态更新减少不必要渲染；*
- *useReducer 集中状态管理，但每次dispatch 都执行一次reducer，可能导致性能问题；代码量也增加；*

- useRef 在函数组件中创建可变的引用对象，在整个生命周期内保持不变，值的变化不会触发组件更新；
- 访问dom 元素，比如获取焦点，focus
  保存可变值，比如计算器count
  缓存数据，比如用户输入的表单数据，保存在ref 中，不会触发组件更新；
- useRef 是*破坏单向数据流的*，可能导致UI不变化，代码维护可能难，调试难；
- 并且useRef 持有引用没有及时释放，会造成内存泄漏。
- useRef 管理计数，点击按钮更新 ref 值，但界面不会重新渲染，无法显示最新计数

- context 怎么使用？
-   - 创建context,React.createContext() 
-   - *使用provider 提供数据，* *当value改变时，子组件会重新渲染*
-    <UserContext.Provider value={{ user, setUser }}>
      <ChildComponent />
    </UserContext.Provider>
    - useContext hooks或Context.Consumer 获取数据
  - context 优缺点：
  - - 优点：跨城层传递数据，避免props层层传递；无需额外状态库；
    - 缺点：耦合度高，Context变化，所依赖的组件也可能要变化？
    - Context 里面数据流动随着应用规模可能变得复杂，调试难度大
    - Context 变化，可能子组件也需要变化（性能优化）

- 说慢一点，表示自己需要思考。
- 隐藏操作 
  - display:none;重排；
  - opacity:0;重绘；可交互
  - visibility:hidden;重绘，不可交互
  - transform:scale(0);重绘，不可交互，占体积
- em，rem，
  - font-size 
  - em 按照父元素字体大小计算，
- z-index 控制元素堆叠上下文
  - 定位处理static外的
  - 父元素z-index较低时，子元素z-index再高也无效
  - 同级元素比较时，后出现的元素默认在上层
- 移动端适配，


- 项目场景
  - 1. 项目中间层抽离做什么，有没有什么思考？
  - 解耦  将通用能力（请求拦截、日志收集、权限校验）从业务代码中剥离
  - 1. 能不能把公共中间层中，针对每个项目的功能设计成可插拔的插件，有没有见过这种架构
    1. Vue CLI 的插件体系
    2. Webpack 的 loader/plugin 机制
    3. Babel 的 preset/plugin 方案
    4. VS Code 的扩展系统
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
-   **使用缓存对象存每个列表高度，先给预设高度，初始渲染后，更新实际高度；**
-   虚拟列表：只渲染可见区域，以及小部分列表项；减少dom节点数量；
-   定高，计算每个列表项的top值，然后设置transform；
-   无限滚动，滚动到底部，计算当前，加载更多数据；
-   getBoundingClientRect
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

- webscok 返回数据和post 一样吗？
  - post，一次http请求，每次都发送请求，实时性差
- 怎么实现一个轮播组件？
  - html包含轮播项、左右按钮，css实现轮播动画，js实现左右按钮的点击事件，切换轮播项。
- 预检请求：发起真正请求前，先发options请求，判断是否允许跨域请求 √
- ts：泛型，允许你定义函数、类或接口时使用类型变量，编写可复用代码，保证安全。
  - 泛型函数：function identity<T>(arg: T): T { return arg; 
  }
  - 泛型类：class Box<T> { value: T; constructor(value: T) { this.value = value; } }
  - 泛型接口：interface Pair<T, U> { first: T; second: U; }

- vue+nodejs
- 开源库的源码，实战经验，
- 前端运维、监控、部署、发布
- 