// mvc
const Koa = require('koa');
const app = new Koa();
const one = (ctx,next) => {
    console.log('one');
    next(); // 继续执行下一个中间件
    console.log('one end');
}
const tow = (ctx,next) => {
    console.log('tow');
    next(); // 没有下一个。回溯
    console.log('tow end');
    
}
app.use(one)
app.use(tow)

// 中间件 req middlewares res 
// const main = ctx => {
//     // 请求行
//     console.log(`${ctx.request.method} ${ctx.request.url} ${Date.now()}`);
//     ctx.body = 'Hello World';
// }
// app.use(main)
app.listen(3001);
