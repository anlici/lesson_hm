## react ui 组件库
- shadcn-ui 
- react-router-dom
  Home Search 
- axois api 统一管理
- store 中央管
- ts types/articles.ts 设置类型约束
- hooks 编程 

- tailwind 
  - css 原子类，
  - 有足够文档让ai生成样式有更多上下文，类名语义
  - 适配方便
- 类型声明 ts 比如：path 就要有类型声明
  npm i @types/node 

- fible 事件合成？
  SyntheticEvent 
- @types 类型声明文件
  node 早于ts 

- pnpm 包管理器，
  内容可寻存储技术，所有依赖在一个全局存储目录(默认为~/.pnpm-store)
  使用缓存，减少重复下载，减少磁盘空间

- pnpm dlx shadcn@latest init
  dlx：无需全局安装即临时下载并运行指定命令，避免全局环境污染
- react 路由懒加载，serspace lazy load

  shadcn 基于tailwindcss和raduix ui，
- pnpm dlx shadcn@latest add button  需要的组件，命令加载
  xpose  

- utils 工具，
  types 
  store 放actions 
- zstand 轻量级，create 创建一个store，set 修改state，get 获取state

- ts 类型建议
  
- SSR 服务端渲染
  - 根据URL确定渲染页面组件或路由，获取页面数据，渲染页面。
    获取数据和事先定义的模板引擎，生成包含数据的HTML页面
  - 使用框架提供渲染器创建方法，如：vue-server-renderer的createBudleRenderer方法，
    react-dom/server的renderToString方法

- SSR 对seo友好
  - 搜索引擎直接抓取服务器渲染HTML页面，获取页面内容和元信息
    相比客户端，爬虫无需解析js，能解析页面关键信息
  - 页面完整性高，SSR完整，不想csr只有HTML空白
  - 首屏加载快，seo 对页面评估高
