// mvc
const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
// 中间件 req middlewares res 
const main = ctx => {
    // ctx.response.body = 'Hello World';
    //  ctx.body = 'Hello World';
    // fs 读取文件
    ctx.response.type = 'html'; //响应头
    // 创建 读取流 
    ctx.response.body = fs.createReadStream('./index.html')
}
app.use(main)
app.listen(3000);
