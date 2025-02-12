const Koa = require('koa');
const app = new Koa();
// 数组 健壮性 
const handler = async(ctx, next)  => {
  try {
    await next();
  } catch(err) {
    ctx.response.status = err.statusCode || err.status || 500;
    // ctx.response.body = {
    //   message: err.message
    // }
    ctx.response.body = err.message;
    ctx.app.emit('error', err, ctx); // 触发error事件
  }
}

const main = async (ctx, next) => {
  ctx.throw(500); // 抛出一个错误
  await next();
}

app.use(main);
app.use(handler); // 挂载 有人兜底 错误处理中间件
app.on('error', err => {
  console.log(err)
});
app.listen(3000);