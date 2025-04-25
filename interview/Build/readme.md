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
- 代码分析
- 算法
  - 二叉树路径和
  - 最长不重复字符
  - 

- 项目场景
  - 1. 项目中间层抽离做什么，有没有什么思考？
  - 1. 能不能把公共中间层中，针对每个项目的功能设计成可插拔的插件，有没有见过这种架构
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
2、块级元素、行内元素
3、脱离文档流
4、absolute和fixed
5、重绘和重排
6、怎么减少重排
7、promise的api
8、promise.all和allsettled
9、箭头函数
10、计算属性和watch
11、vue2和vue3的区别
12、响应式原理和diff算法
13、浏览器本地缓存
14、怎么实现懒加载和无限滚动的
15、防抖和节流的区别
16、虚拟列表。怎么做。不定高度的虚拟列表怎么做：拿到元素的宽高继续计算
17、组件库select有没有了解到被父层级遮挡，antd。有个属性。把div挂载在body上。
18、性能优化怎么做的。顺带问了defer和async。js依赖怎么顺序加载。
19、大学里最有成就感的一件事
20、为什么选择前端
21、AI对前端学习有什么改变
反问：用到的库可以去了解它的底层实现，遇到性能问题可以去看底层的实现，构建工具比如vite的热加载，各个底层的实现，拦截和实施。可以利用AI去学习。

