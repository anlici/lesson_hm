# 跨域

- fetch 为什么不能跨域？
  - 同源策略
    - 协议
    - 域名
    - 端口

- fetch和xml和axios，有什么优势？
  - 相比xml，fetch更加简单易用，不用open，rend
  - 相比axios，fetch更加轻量，不需要引入axios库
  - 

- 原型式，函数

- 运行环境，js前后端为什么都有空用？
  编译，执行
  前端 v8 引擎在浏览器中执行；
  后端 node.js 基于v8引擎,在服务器中执行;
      剥离html，借助c++ 调用系统服务
  http 模块 就是node.js 中 http 协议的实现

- 为啥node 需要模块化？
  - 依赖管理：项目依赖关系复杂
  - 代码复用：如数据库连接等
  - 后端web开发服务
  - http 请求响应，

  - mvc 模式？
    model 连接数据库
    view 渲染页面
    controller 控制器，处理请求响应，
    校验参数，逻辑代码

- 为啥用commonjs又出现es6模块化？
 
- 为啥学node？
  - 后端开发，

- npm i -g nodemon 检查变化，自动重启
- 浏览器，proxcy 代理？
- hcpip? qq实时聊天，

- CORS Cross-Origin Resource Sharing 跨源资源共享
  Origin > 协议protocal 域名domain 端口port
  跨域domain
  安全策略
  - http://127.0.0.1:5500/ js script 跨域
    localhost:3000
    
  - 包含谁？
    - 后端数据，自定规则
      没有block，来自前端
    - 前端安全：
      同源策略，限制跨域请求；
      js dom 修改页面；
 


- jsonp利用script标签，不受同源策略限制；
  安全性低，只能get请求；
  前端动态创建一个 <script> 标签，
  src 指向目标 URL，并附带一个回调函数名

- 使用script ，把后端的json数据，
- cdn？

- 异步
- async await / promise
- 回调

- jsonp with padding(函数名)
  - 前端需要script标签，src 执行api url
  - 页面上埋下全局 window.callback
  - 需要后端返回一个函数调用，
- 