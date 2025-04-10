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

## 防抖 utils 
- js 工具函数，复用
- hooks 封装响应式业务 
- await new Promise((resolve) => setTimeout(resolve, 1000)); 
  **模拟sleep**
- map 里面的key 
- watchEffect 监听state变化，执行回调,
  自动追踪依赖并执行，复杂逻辑（如查看是否还有库存）
  立即执行一次，当依赖变化时，重新执行

## AI 搜索
- koa-router  @koa/cors koa-bodyparser
- 使用koa 处理后端openai 进行AI搜索 embending 处理posts.json 数据
- 

- 回文+递归
- 选择技术栈，

## 亮点
- 搜索功能，结合AI embedding 接口，拿到搜索关键字向量表达，将这个和所有其他向量进行距离计算，
  余弦相似度比较，返回前三位，基于语义搜索
- zsandard 做状态管理，里面也有持久化功能；
  search hooks 封装响应式业务，路由，设计组件，hooks，store，
  请求包含loading，error，data，
- 提供product，设置posts.json 数据，
- react 记账，实现hooks 
- 使用fs/promises 读取posts.json 数据，结合promise和await 简化异步逻辑
  fs/promises进行读写,删除等