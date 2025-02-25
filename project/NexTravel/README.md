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

- 这是一个基于Vue3的页面缓存实现方案，通过keep-alive组件配合router-view实现组件级别的缓存控制。
- 在template中使用三层嵌套结构：router-view提供路由组件 -> keep-alive控制缓存 -> component进行渲染
- 通过computed属性动态计算需要缓存的组件列表，使用元信息 route.meta.cache作为缓存判断依据
- 使用:include动态绑定筛选后的组件名称，确保只缓存需要的组件
- 性能优化，，代码可维护和灵活性更强

## vant-swipe 组件的lazy-render 属性
- 轮播组件 只渲染当前item，实现懒加载