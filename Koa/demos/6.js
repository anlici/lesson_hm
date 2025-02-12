const Koa = require('koa');
const router= require('koa-router');
// const bodyParser = require('koa-bodyparser'); // ?
const app = new Koa();

const rederict = ctx => {
    ctx.response.redirect('/');
}

const main = ctx => {
    // ctx.body = 'Hello World';
    // ctx.throw(500);
    ctx.status = 404;
    ctx.body = 'Hello World';
}

app.use(router.get('/'),main);
app.use(router.get('/rederict'),main) // 重定向到 /

app.listen(3000);