const Controller = require('egg').Controller;

class BillController extends Controller {
  async add() {
    const { ctx, app } = this;
    const { 
      amount,
      type_id,
      type_name,
      date, 
      pay_type,
      remark = ''
    } = ctx.request.body
    console.log(amount, type_name);
    if (!amount || !type_id || !type_name || !date || !pay_type) {
      ctx.body = {
        code: 400,
        msg: '参数错误'
      }
      return
    }

    try {
      let user_id = ctx.user.id;
      const result = await ctx.service.bill.add({
        amount,
        user_id,
        type_id,
        type_name,
        date,
        pay_type,
      })
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: result
      }
    } catch(err) {
      ctx.body = {
        code: 500,
        msg: '服务器内部错误'
      }
    } 
  }
  // 修改
  async update() {
    const { ctx, app } = this;
    const {id} = ctx.params; // 获取路由参数
    const {
      
      amount,
      type_id,
      type_name,
      date,
      pay_type,
      remark 
    } = ctx.request.body
    if (!id || !amount ||!type_id ||!type_name ||!date ||!pay_type) {
      ctx.body = {
        code: 400,
        msg: '参数错误'
      }
      return
    }

    try {
      const user_id = ctx.user.id;
      const result = await ctx.service.bill.update({
        id,
        amount,
        type_id,
        type_name,
        date,
        pay_type,
        user_id
      })
      ctx.body = {
        code: 200,
        msg: '更新成功',
        data: result
      }
    } catch(err) {
      ctx.body = {
        code: 500,
        msg: '服务器内部错误'
      }
    }
  }
  async delete() {
    const { ctx, app } = this;
    
  }
  async detail() {  
    const { ctx, app } = this;
    let { id } = ctx.params;
    if (!id) {
      ctx.body = {
        code: 400,
        msg: '参数错误'
      }
      return
    }
    try {
      const result = await ctx.service.bill.detail(id)
      ctx.body = {
        code: 200,
        msg: '获取成功',
        data: result
      }
    } catch(err) {
      ctx.body = {
        code: 500,
        msg: '服务器内部错误'
      }
      return
    }
  }

}

module.exports = BillController;