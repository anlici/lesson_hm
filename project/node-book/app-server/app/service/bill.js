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

  async list(params) {
    const{ app } = this
  }
}