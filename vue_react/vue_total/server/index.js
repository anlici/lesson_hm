// server/index.js
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();
const port = 3000;

app.use(bodyParser());

// 模拟用户数据
const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' },
];

// 存储验证码
let captchaStore = {};

// 生成验证码
const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 4; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

// 获取验证码
router.get('/api/captcha', (ctx) => {
  const captcha = generateCaptcha();
  captchaStore[captcha] = true;
  ctx.body = { captcha };
});

// 登录接口
router.post('/api/login', (ctx) => {
  const { username, password, captcha } = ctx.request.body;

  // 验证验证码
  if (captchaStore[captcha]) {
    delete captchaStore[captcha];
  } else {
    ctx.status = 400;
    ctx.body = { message: '验证码错误' };
    return;
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // 生成一个简单的 token
    const token = 'some-jwt-token';
    ctx.body = { token, role: user.role };
  } else {
    ctx.status = 401;
    ctx.body = { message: '用户名或密码错误' };
  }
});

// 定义根路径 / 的路由，返回一个简单的消息
router.get('/', (ctx) => {
  ctx.body = '欢迎来到登录页面！请访问 /api/captcha 获取验证码并登录。';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});