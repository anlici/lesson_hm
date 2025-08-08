## [NexTravel]是一款基于 Vue3+TypeScript 的旅行社交应用，灵感来源于小红书与马蜂窝的混合形态。项目聚焦三大核心场景：

- 用户系统：JWT鉴权登录 + 个人主页动态管理
- 内容社区：图文瀑布流 + 地点标记交互
- 智能搜索：集成 CozeAI 实现自然语言旅行咨询

- 采用技术栈：vue3+ts+tailwindcss+axios+cozeai等

## 后台管理
- 二次开发富文本编辑器
- 文化上传，断点续传
- 在线Excel 导入导出
- vant 库上面的轮播组件
## keep-alive

- 这是一个基于Vue3的页面缓存实现方案，**通过keep-alive组件配合router-view实现组件级别的缓存控制**。
- 在template中使用三层嵌套结构：router-view提供路由组件 -> keep-alive控制缓存 -> component进行渲染
- 考虑到旅游页面，图片列表等数据较多，每次向服务器加载或者切面不同路由，性能消耗较大 
  keepalive 缓存 渲染组件，组件状态保留 不会因为切换路由导致过多延迟 后面图片懒加载也是用户体验优化
  如果后续某个旅游页面需要处理，还可以使用include 和 exclude属性进行组件的缓存控制

- 通过computed属性动态计算需要缓存的组件列表，使用元信息 route.meta.cache作为缓存判断依据
- 使用:include动态绑定筛选后的组件名称，确保只缓存需要的组件
- 性能优化，，代码可维护和灵活性更强
## 列表渲染，v-for 渲染多个组件，并在每个组件上使用 v-if 或 v-show 来控制其显示状态
- 大量列表 key -> 更新和重用dom 
- 不同旅游地方切换，v-if ：用户切换旅游地点，相应地点信息展现，
  切换考虑一般不用太频繁，并且考虑相应旅游信息量 大，如果不渲染就性能消耗小
  每次 销毁和创建
  v-show： 旅游活动选择 ，徒步，潜水还是爬山

## 人机匹配
- 0 1 人机，component 按照匹配到值
  动态渲染组件，也就是 
## rag 
- 课程信息 知识库，ebedding 模型，向量化
- 用户询问，比如 操作系统老师是哪位？
  也向量化，使用余弦相似度匹配，匹配相似度最大
  使用es6占位符放入 prompt给大模型，
  获取大模型返回结果，返回给用户
- 构建知识库：**分段重叠**
  文本在分割成小块（chunk）时，相邻的块之间存在一定的内容重叠
  大模型推理：token限制。分块处理，有完整上下文

## 图片懒加载
- 非关键资源
- 监听onscroll 和 getBoundingClientRect(), 获取元素在视口内的位置
  （距离视口顶部距离，视口高度,）
- 阮一峰 intersection observer，比前面实现简单，
  异步 图片与视口的交叉阈值（isIntersecting）
  不依赖页面滚动，性能优秀

## 路由懒加载
- 不同路由对应 不同chunk 分块，异步加载
- 
## jwt 鉴权
- 前端封装axios 处理登入、注册获取用户信息等请求，jwt token 从localStorge 中获取
- login 组件调用api方法
  vite 配置代理，反向代理到 后端服务。
- 后端eggjs，主要由控制层，model层，server层
  创建中间件验证jwt，ctx.request.header.authorization
  jwt.verify(token, secret)
- 控制层处理登入和注册请求，生成jwt
- jwt 密钥放到配置文件
- model层处理数据库操作
  
## vant-swipe 组件的lazy-render 属性
- 轮播组件 只渲染当前item，实现懒加载