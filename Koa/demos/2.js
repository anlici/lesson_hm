const koa = require('koa')
const app = new koa()
const route = require('koa-route')
const main = ctx => {
    ctx.response.body = 'Hello World'
}
app.use(route.get('/',main));
app.use(route.get('/about',about))
// const main = ctx => {
//     // url 路径
//     if(ctx.requst.path !== '/'){
//         ctx.response.type = 'html',
//         ctx.response.body = '<a href="/">Index Page</a>'
//     } else {
//         ctx.response.type = '<h1>text</h1>'
//         ctx.response.body = '<h1>Hello World</h1>'
//     }
// }
// app.use(main)
app.listen(3000)