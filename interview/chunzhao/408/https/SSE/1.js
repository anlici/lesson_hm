const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();
const POST = 3000;


router.get('/events', async (ctx) => {
    ctx.set('Content-Type','text/event-stream');
    ctx.set('Connection','keep-alive'); // 长连接
    ctx.set('Cache-Control','no-cache');// 缓存控制

    const startTime = Date.now();

    const sendEvent = () => {
        if(Date.now() - startTime > 5000) {
            ctx.res.end();
            return;
        }
        const data = {name:'zhangsan',age:18}
        ctx.res.write(`data:${JSON.stringify(data)}\n\n`);
        setTimeout(sendEvent,1000);
    }

    sendEvent();
})

app.use(router.routes());
app.listen(POST,() => {
    console.log(`server is running at http://localhost:${POST}`);
})

