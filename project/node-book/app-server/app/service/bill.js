const user = require('../model/user')

const Service = require('egg').Service

class BillService extends Service {
  async add(bill) {
    const { ctx,app } = this
    try {
      const result = await app.model.Bill.create(bill)
      return { code: 200, data: result }
    } catch (error) {
      return { code: 500, msg: '添加账单失败' }
    }
  }
  async update(params) {
    const { ctx,app } = this
    try {
      // 修改 让Bill 模型中的数据，条件where 
      let result = await ctx.model.Bill.update({
        ...params
      },{
        where: {
          id: params.id,
          user_id: params.user_id
        }
      })
      
      return result
    } catch (error) {
      return { code: 500, msg: '更新账单失败' }
    }
  }

  async list(params) {
    const{ app } = this
  }
  async delete(params) {
    const { app } = this
    try {
      // 修改 
      let result = await app.model.Bill.destroy

    } catch (error) {
      return { code: 500, msg: '删除账单失败' }
    }

  }
  async detail(id) {
    const { app } = this
    try {
      // 修改 orm里面的sequilize 查询
      let result = await app.model.Bill.findOne({
        where: {
          id,
        }
      })
      // console.log(result);
      
      return result.dataValues
    } catch (error) {
      return { code: 500, msg: '获取账单详情失败' }
    }
  }
}

models.exports = BillService