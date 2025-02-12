
const Koa = require('koa');
const app = new Koa();
// cookie 计数器
const main = ctx => {
  const n = Number(ctx.cookies.get('view')|| 0) + 1;
  ctx.cookies.set('1 hello','world')
  ctx.cookies.set('view', n);

  ctx.response.body = n + ' views';
};

app.use(main);
app.listen(3000);
