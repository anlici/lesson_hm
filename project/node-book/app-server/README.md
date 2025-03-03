## notebook 后端api 服务
- egg.js 阿里开源框架
  约定为先，阿里在koa封装
  - router 路由规则；controller 解析用户输入，处理返回相应结果；
    service 编写业务逻辑
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

- csrf 攻击 跨站请求伪造
  - 不是用户，拿不到 userAgent 浏览器信息，
  - 随机生成一个token，每次请求带上token，服务器验证token
- config.security = {
    csrf: {
      enable: false, // 关闭csrf校验
      ignoreJSON:true
    },
    domainWhiteList: ['*'] // 允许访问的域名
  }

- form-data 支持文件上传，x-www-form-urlencoded 编码建键值对，不支持文件上传
  json 数组，嵌套对象等，复杂数据类型
  请求头（Headers）中设置对应的 Content-Type 来指定使用哪种编码方式
  post 请求编码？
- get / post 请求区别？
  - get 请求参数在url中，post 请求参数在body中
  - get 请求参数长度有限制,1kb，post 请求参数长度无限制
  - get 请求参数可以缓存，post 请求参数不可以缓存
  - get 直接在url 不太安全，post 安全，post 可以上传大文件，get 不可以
  - get 获取数据，post 提交数据
  - 幂等性：get 请求产生一样操作，post 可能每次请求产生不一样结果
- 大文件切片上传，断点续传，

- egg.js api服务
  - 路由 http 协议
  - controller 控制层
    extends Controller
  - model 模型层
    table -> model
  - service 
    数据库 crud 操作
  - view 
    api 服务，不用界面，react负责

- sequelize ORM? 
  orm 对象关系映射，
  
- 密码，不使用明文，使用加密算法
  单项加密，
- truncate user 删除 user 表
- jwt json web token
  jwt sign token 后端签发，前端在localStorge 存储，每次axios请求的authorization都带上token
  authorization: token(localStorage.getIntem('token'))
  后端 verfify token -> user
  - secret 密钥 加密，服务器才能解开
  - expiresIn 过期时间
  - 双token 无感刷新，到期了再次签发，前端重新获取token

- pnpm i egg-jwt 插件
  加装 jsonwebtoken 
  