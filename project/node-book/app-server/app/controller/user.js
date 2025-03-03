'use strict';

const Controller = require('egg').Controller;
const bcrypt = require('bcryptjs') // 单向加密

const defaultAvatar = 'http://s.yezgea02.com/1615973940679/WeChat77d6d2ac093e247c361f0b8a7aeb6c2a.png'
// java 风格
class UserController extends Controller {
  // 注册
  async register() {
    // 解析请求体 username password
    const { ctx } = this;
    // 解构请求体
    const { username, password } = ctx.request.body;
    // 校验参数
    if (!username || !password) {
      ctx.body  = {
        code: 400,
        msg: '用户名或密码不能为空',
      }
      return 
    }

    // username 是否存在
    const userInfo = await ctx.service.user.getUserByName(username)
    console.log(userInfo, '////////');
    if (userInfo && userInfo.id) {
      ctx.body = {
        code: 400,
        msg: '账户已经被注册,请重新输入',
        data: null
      }
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    const result = await ctx.service.user.register({
      username,
      password: hashedPassword,
      avatar: defaultAvatar,
      ctime:  +Date.now(),
      signature: '这个人很懒,什么都没有留下',
    })

    if (result) {
      ctx.body = {
        code: 200,
        msg: '注册成功',
        data: null
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '注册失败',
        data: null
      }
    }

  }

  async login() {
    const { ctx } = this; 
    const { username, password } = ctx.request.body; // koa 需要body 解析
    if(!username || !password) {
      ctx.body = {
        code: 400,
        msg: '账号或者密码不能为空',
        data: null
      }
      return;
    }
    const userInfo = await ctx.service.user.getUserByName(username); // 获取用户信息
    if(!userInfo || !userInfo.id) {
      // 没有查询到
      ctx.body = {
        code: 500,
        msg: '用户名不存在',
        data: null
      }
      return;
    }
    // compare 把password再次用bcrypt加密，比较是否一致
    const isPasswordValid = await bcrypt.compare(password, userInfo.password)
    if(!isPasswordValid && userInfo) {
      ctx.body = {
        code: 500,
        msg: '密码不正确',
        data: null
      }
      return;
    }
    const app = this.ctx.app;
    // jwt 给用户颁发有效期的token cookie session为啥不用？
    const token = app.jwt.sign({
      id: userInfo.id,
      username: userInfo.username,
      exp:Math.floor(Date.now() / 1000) + (24 * 60 * 60 ),// 24小时过期
    },app.config.jwt.secret)
    
    ctx.body = {
      code: 200,
      msg: '登录成功',
      data: {
        token
      }
    }

  }
  // 修改用户签名
  async editSignature() {
    const {ctx} = this;
    console.log(ctx.user);
    if(!ctx.user) {
      ctx.body = {
        code: 401,
        msg: '用户信息失效，请重新登录',
        data: null
      }
      return;
    }
    const { signature } = ctx.request.body;
    if(!signature) {
      ctx.body = {
        code: 400,
        msg: '签名不能为空',
        data: null
      }
      return;
    }
    try {
      const result = await ctx.service.user.editUserInfo(
        ctx.user.username,
        signature
      );  
  
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: result
      }
    
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: '修改失败',
        data: null
      }
    }
     
  }
  // 修改用户信息
  async getUserInfo() {
    const {ctx} = this;
    if(!ctx.user) {
      ctx.body = {
        code: 401,
        msg: '用户信息失效，请重新登录',
        data: null
      }
      return;
    }
    try {
      const result = await ctx.service.user.getUserByName(ctx.user.username);
      ctx.body = {
        code: 200,
        msg: '获取成功',
        data: result
      }
    } catch(err) {
      ctx.body = {
        code: 500,
        msg: '获取失败',
        data: null
      }
    }
  }
}

module.exports = UserController;