// commonjs
const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();
const axios = require('axios');
const cors = require('@koa/cors');

// 跨域
app.use(cors({
    origin: 'http://localhost:5173', // 允许的请求源
    credentials: true, // 允许携带凭证cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))
// 新建 method url 
router.get('/',async (ctx) => {
    ctx.body = `
    <h1>首页</h1>
    `
})

router.post('/chatai',async(ctx,next) => {
    // ctx 响应对象，请求响应的上下文
    // 响应体里面是body
    const message = ctx.request.body.message;
    // 生成式，按照chatgpt的接口
    const data = {
        model: 'deepseek-r1:1.5b',
        messages:[
            {
                role: 'user',
                content: message
            }
        ],
        stream: false
    }
    // axios
    const response = await axios
        .post("http://localhost:11434/api/chat",data)
       .then((res) => {
          console.log(res.data);
       })
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