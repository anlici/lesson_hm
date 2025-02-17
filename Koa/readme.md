# koa

node 后端简单开发框架

- 中间件
  核心 洋葱模型
  next ‘递归’ 到 ‘回溯’
- 路由
- api json ctx 
  上下文 ctx = request + response 
- fs 从硬盘读取到内存，stream 分块对大文件
  readFileSync 或 readFile 同步或异步 一次性读取整个文件
    fs.readFile(file, (err, data) => {}) // 异步
- 简历http server
