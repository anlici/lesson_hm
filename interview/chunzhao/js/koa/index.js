const Koa = require('koa');
const app = new Koa()

app.use(async (ctx, next) => {
  console.log("第一个中间件-进来");
  await next();
  console.log("第一个中间件-出去");
});

app.use(async (ctx, next) => {
  console.log("第二个中间件-进来");
  await next();
  console.log("第二个中间件-出去");
});

app.use(async (ctx, next) => {
  console.log("第三个中间件-进来");
  // 这里没有调用 next()，所以不会继续往下走
  console.log("第三个中间件-出去");
});

app.listen(3000);