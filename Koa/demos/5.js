
const path = require('path');
const Koa = require('koa');
const app = new Koa();

// 静态服务
const server = require('koa-static');
// __dirname 当前目录，join 拼接
// server 将当前目录下的static作为静态服务
// __dirname 绝对路径 ，路径对象 __dirname/static  直接使用static里面的文件作为静态服务
const main = server(path.join(__dirname,'static'))

app.use(main)
app.listen(3001)
