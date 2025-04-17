## 25 春招
- 项目亮点
  - 数据可视化，3d地球（three.js）
    导演视角 camera scene(materail+model模型)
- ref 简单响应式，ref 绑定dom 元素；组件实例，调用
  浅显

## 场景题
- typeof 除了null 其他简单数据类型都能获取正确类型；除了函数，数组 其他复杂判定是对象 
  Array.isArray() 判断数组
  installof 对象
  object.prototype.toString.call() 获取类型

## 跨域？为啥出现跨域？怎么解决？
- 跨域的原因：同源策略，浏览器为了防止跨域攻击，不允许跨域访问
  当不同源，比如：不同协议，不同域名，不同端口，浏览器为了安全，防止buffer中，不会发送请求，直接返回跨域错
- 发送请求双方交互：客户端和服务器通信，客户端发送请求，服务器接收并且返回响应，客户端访问不同服务器资源，浏览器通过同源策略阻止请求
- 解决：
  - jsonp：利用script标签，不受跨域影响，通过src属性发生请求，通过回调函数获取数据
  - cors：通过响应头设置access-control-allow-origin，允许跨域访问
  - proxy：代理服务器，代理服务器转发请求，解决跨域问题
  - websocket: 不受同源影响，是客户端和服务器之间双向实时通信的协议（流式输出）;通过ws:// wss:// 协议建立连接，绕过同源限制
  - document.domain：子域和fuyu.com 同源，子域和fuyu.com.cn 不同源，设置document.domain，子域和父域共享域名，解决跨域问题
  - postMessage：通过window.postMessage()方法，发送信息，通过onmessage事件接收信息，解决跨域问题

- http 的content-type 有哪些值的类型：
  - 文本类型：text/html text/plain（纯文本） text/css
  - json: application/json json数据
  - 表单：application/x-www-form-urlencoded 普通表单提交
  - 文件：multipart/form-data 文件上传
  - 自定义类型

- json 与 表单区别：
  - json：轻量级数据交换格式，易于机器解析，前后端数据交换
    以数组或对象形式，通过key-value对传递数据
  - formData：通常构建普通表单aplication/x-www-urlencoded 或 multipart/form-data格式，用于文件上传，表单提交
    使用formData
    
## 微任务
- process.nextTick() 优先，在当前操作完成后立即执行，不会进入事件循环的下一个阶段
- setImmediate 优先，回调会再当前事件渲染结束后、进入下一个事件循环前执行。

## 前端模块化怎么理解？
- CommonJS和ES Module有什么区别？
  怎么理解ES Module偏静态？
  ES Module的加载顺序是什么？

- 前端模块化：
  - 避免全局污染，前期使用IIFE 立即执行函数（隔离作用域），避免全局变量污染
  - 按需导入导出，模块化组织代码，明确模块之间关系
  - 代码组织：按功能拆分文件，利于维护
  - 按需加载，动态导入提升性能

- commonjs 和 es module
  - commonjs：nodejs 模块化规范，nodejs 默认模块化规范，使用require导入模块，使用module.exports导出模块
  - es module：浏览器模块化规范，使用import导入模块，使用export导出模块
  - commonjs：运行时动态加载，属于动态模块，能够在条件加载；
    值传递通过值拷贝（浅），顶层this 指向当模块
  - es module：编译时静态加载，属于静态模块，不能够条件加载；
    值传递通过引用传递（深），顶层this 指向window

- es module 静态：
  - 在引入文件顶部，执行前解析所有import/export语句，解析完成，执行文件代码
  - 打包工具（webpack）：提前分析依赖，进行tree-shaking，减少代码体积，减少请求数量，减少加载时间
  - 实时绑定：导入是动态映射，修改导出影响导入

- type: "module" 设定module
- es module 加载
  - 解析：从入口文件开始，递归查找所有import语句，解析所有依赖，生成依赖关系图
  - 下载：现代浏览器并行下载所有模块（无阻塞）
  - 执行：深度优先后续遍历，从底层依赖开始，到入口文件
  - 单例特性：同一个模块只执行一次

