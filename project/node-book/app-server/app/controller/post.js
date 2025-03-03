'use strict'; // 严格模式

const Controller = require('egg').Controller;
// 继承 基类
class PostController extends Controller {
    async index() {
        // this?  ctx 上下文 = request + response 
        const { ctx } = this;
        ctx.body = '文章列表'
    }
}

module.exports = PostController