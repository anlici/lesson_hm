const Koa = require('koa');
const Router = require('koa-router');
const { createSSRApp } = require('vue'); // 引入Vue SSR相关方法
const { renderToString } = require('@vue/server-renderer'); // 引入渲染工具

const app = new Koa();
const router = new Router();

// 定义Vue组件
const vueapp = {
    template: `
    <div>
        <h1 @click="add">{{num}}</h1>
        <ul>
            <li v-for="(item, index) in todos" :key="index">{{item}}</li>
        </ul>
    </div>
    `,
    data() {
        return {
            num: 1,
            todos: ['吃饭', '碎觉', '打豆豆']
        };
    },
    methods: {
        add() {
            this.num++;
        }
    }
};

// 路由处理
router.get('/', async (ctx) => {
    try {
        const appInstance = createSSRApp(vueapp); // 创建Vue SSR应用实例
        const html = await renderToString(appInstance); // 渲染为HTML字符串

        ctx.body = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>SSR 更友好</title>
            </head>
            <body>
                <div id="app">${html}</div>
            </body>
        </html>
        `;
    } catch (error) {
        console.error('渲染错误:', error);
        ctx.status = 500;
        ctx.body = '服务器内部错误';
    }
});

// 注册路由中间件
app.use(router.routes())
   .use(router.allowedMethods());

// 启动服务
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});