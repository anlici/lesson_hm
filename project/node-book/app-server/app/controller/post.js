'use strict'

const Controller = require('egg').Controller;
// 继承 基类
class PostController extends Controller {
    async index() {
        const { ctx }= this; // 指向对象实例，ctx 上下文=request+response
        // 响应
        ctx.body = '文章列表';
    }
}
module.exports = PostController; // 暴露对象