'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 根据用户名获取用户信息
  async getUserByName(username) {
    const { ctx } = this
    try {
      // 查询用户
      const result = await ctx.model.User.findOne({
        where: {
          username
        }
      })
      return result
    } catch(err) {
      console.log(err)
      return null
    }
  }
  async register(user) {
    const { ctx } = this; // 获取上下文
    try {
      const result = await ctx.model.User.create(user); // 创建用户
      if(result) {
        ctx.body = {
          code: 200,
          msg: '注册成功',
          data:null
        }
      } else {
        ctx.body = {
          code: 400,
          msg: '注册失败',
          data:null
        }
      }
      
      return result; // 返回结果
    } catch(err) {
      console.log(err)
      return null
    }
  }
  async editUserInfo(username,signature) {
    const { ctx } = this;
    try {
      const user = await this.getUserByName(username);
      if(!user) {
        ctx.status = 404;
        return null;
      }
      let result = await user.update({
        signature
      });
      return result;
      
    } catch(err) {
      console.log(err)
      return null
    }
  }
  
}

module.exports = UserService;