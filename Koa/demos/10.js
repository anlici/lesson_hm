const Koa = require('koa');
const app = new Koa();
const {koaBody} = require('koa-body');

const main = async (ctx) => {
  ctx.body = {name:body}
};
app.use(koaBody());
app.use(main);
app.listen(3000);
