// commonjs
const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();

// 新建 method url 
router.get('/',async (ctx) => {
    ctx.body = `
    <html>
        <head>
            <meta charset="utf-8">
            <title>koa2</title>
        </head>
        <body>
            <h1>koa2</h1>
        </body>
    `
})
router.get('/news',async (ctx) => {
    ctx.body = '新闻'; 
})
router.post('/chatai',(ctx,next) => {
    // ctx 响应对象，请求响应的上下文
    // 响应体里面是body
    ctx.body = {
        code:200,
        message:'我是一个机器人'
    }
})
// 中间件
app.use(router.routes());
// 允许的请求方式
app.use(router.allowedMethods());

app.listen(3000,() =>{
    console.log('3000端口启动成功');
});