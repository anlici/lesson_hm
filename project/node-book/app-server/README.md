## notebook 后端api 服务
- egg.js 阿里开源框架
- koa 框架
  - middleware 中间件，洋葱模型？ 每个中间件都是函数
  - ctx 上下文
  - http listen 
- mvc 模式，后端；c:contraller, v:view, m:model
  mvvm 模式，前端

- npm init egg --type=simple

- egg 比koa 更快
- es6 module 模块化和es5 模块化区别 ####

- url 构成：协议 路由 端口 path querystring（？page=1&limit=10）
  - http://127.0.0.1:7001/api/v1/notebooks?page=1&limit=10
    这里parmas 参数 是1
  - http://127.0.0.1:7001/api/1

- orm object relational mapping 
  - 