### react notebook 全栈
- pnpm i react-router-dom -S
  --save 一直依赖 react-router-dom@7
  --save-dev -D 开发阶段依赖

- 项目阶段
  - 开发阶段 development vite
  - 测试阶段 test 没有环境 npx
  - 上线阶段 production webpack
  - 打包 npm run build 生成dist
     -> 项目部署->dns -> 上线

- 页面级别

- es6 module 
  import React {useState as useState,} from 'react'
  import * as React from 'react'
  as 别名

-  pnpm i zarm@3.1.2 选择版本
- 引入button 组件，样式，
  配置ConfigProvider primaryColor 定制theme 
- build 打包 静态文件assets，index.html 引入
    - css js
    性能 http 并发数 
- size gzip 大小 http 主动启动gzip 压缩传输
- 应用层 表示层 会话层 传输层 网络层 数据链路层 物理层 

- pnpm install vite-plugin-style-import    

- 路由功能，性能优化（gzip）
- less css stylus 预编译器
  - 快 使用变量和进行嵌套 、函数
### vite less
- 工程化，里面有编译插件，能够识别less，jsx等
- less 是css 的预编译器，
- class 是类组件里面使用，使用 className
- module css 模块化
  style.module.css 
  vite 申明 less ->解析

- lib-flexible 适配
- PostCSS 允许开发者通过一系列插件来处理和增强 CSS 文件，使其具备更高的可维护性、兼容性和性能。

- vite 使用插件，比如：createStyleImportPlugin 按需导入
  使用css 模块化，
  alias 路径别名配置，

- util 文件下，设置接口
  index 统一配置；
  return res.data;
- cookie 一段字符串，4kb 存储，document.cookie 显示，分号隔开；
  httpOnly 只允许http请求，不允许js操作，只读
  cookie 设定令牌过去，不能使用了
  每次请求默认带上cookie，http 1.0
  如果比较大，每次都带上，http无状态，数据桢，
  网络传输速度慢，不同浏览器对cookie 大小进行限制，超出后可能被截断；
- 只能访问到当下域名的cookie，
- domain 域名，
  exprire 过期时间，
  path 路径，限制有效路径，cookie/api 
- httpOnly 只在请求时带上，安全；
  只secure https 访问，不会在http请求带上，安全；
  jwt token 令牌，

- XXR 把js 脚本插入到页面，
  跨站脚本攻击，攻击者通过伪造用户请求，
  利用用户在目标网站的身份认证cookie，进行跨站请求，获取用户敏感信息，执行恶意代码等。

- 防止：csrf token 令牌，
  遇到敏感请求，加入随机csrf token 令牌，
  服务器生成一个唯一token，存在session中，嵌入到页面；
  再次请求时，服务器验证token，如果一致，则继续执行；
- httpOnly ，防止js读取cookie，
  设置secure 保证 https 访问，不会在http请求带上，安全；

### 业务开发
- NarBar 组件
  使用zarm 库，封装组件
  - components 公共组件
  - zarm TabBar 底部导航 使用 TabBar.Item
  - change setActiveKey 切换
-  pnpm add prop-types 安装 prop-types
   函数式组件对象 propTypes 

- router 路由,useNavigate 导航跳转
  放到组件内部，router 里面
  路由包过一切，将app 包起来，
- routes 放在app里面， SPA 单页面应用，
  hashRouter 监听hash变化，
  historyRouter 监听history 变化，hashChange pushState
- <> </> 文档碎片，fragment 不会增加一层

### 页面设计
- css
  - react module css 模块化，
  - less css 预编译器，
  - icon 图标，zarm 内置
  - linear-gradient 线性渐变，替代图片

- icon 图标，zarm 内置
- 设置showNavBar 控制导航栏显示
  先写伪代码，使用useEffect 监听pathname路径，
  使用useLocation 进行解构pathname路径，
- memo 缓存组件，useMemo 缓存计算结果
  useCallback 缓存函数
- react-router-dom
  BrowserRouter 监听hashChange
  HashRouter 监听hashChange

- 线性渐变，css 渐变，
  background-image:linerg-gradient(to right,red,blue);

## 登入页面
- 登入->注册
  登入： 账号密码，验证码，记住密码，登入按钮，
  注册： 账号密码，确认密码，验证码，
  切换：点击到放大字体，
- >span
  &.active 选中的样式,& 同级
  npm install classnames --save 
- 使用:global 样式，全局冲破mudule限制，