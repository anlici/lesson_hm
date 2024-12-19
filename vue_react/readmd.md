### react 学习路径
    - react 基础语法 过了一遍（b站 | 文档）
    - hook 相关
    - 全家桶 | 状态管理
    - react 源码
    - ts 相关

- AI Coding
  - vue & React 一起搞
  - 自然语义编程
    tailwindcss？
  - antd 组件

- 设计稿 -> 生成组件

- cdn 内容分发网络
  url有缓冲，直接提取；往上传cdn，cdn缓存，加速访问
  静态资源（html，css，js，images） 动态（java，node，数据库，服务器集群）
  
  cdn 加速内容访问和发布机制
当用户请求网站内容时，CDN会选择距离用户最近的服务器来提供内容，这样就能大大减少加载时间，提高用户体验。

- http（cdn ） 引入 前端组件库

  挂载点 ：将前端工作给vue/react, 然后在html中挂载一个挂载点 #root
  挂载Vue App 实例

- app 和传统编程区别
  - createApp 创建vue app 实例
  - #root 挂载点 里面是vue 
  - {{}} 是vue的数据占位符
  - 函数式编程 声明式编程 响应式编程 ?

  - web应用是数据驱动界面
   不需要document.querySelector
   {{data}}

- vue 事件机制 方便 @event="handle"
  事件处理函数 handle
  事件对象 event

- 刷新页面 vue/react 不用dom 使用响应式对象
  .value = "" 修改value 值改变 界面热更新（局部更新）
  规避dom 编程
  不再为api 编程，而是focus 业务开发，满足需求

- html 界面上升到应用，数据驱动界面
  setup 函数 

