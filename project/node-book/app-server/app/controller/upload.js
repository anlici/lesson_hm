// app/controller/upload.js
const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');

class UploadController extends Controller {
  async index() {
    const { ctx, app } = this;
    try {
      const file = ctx.request.files[0];
      // 生成唯一文件名
      const fileName = `${Date.now()}${path.extname(file.filename)}`;
      // 目标路径
      const targetPath = path.join(app.config.baseDir, 'app/public/upload', fileName);
      
      // 使用 Promise 确保文件移动完成
      await new Promise((resolve, reject) => {
        const reader = fs.createReadStream(file.filepath);
        const writer = fs.createWriteStream(targetPath);
        reader.pipe(writer);
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      // 返回静态资源路径
      const staticPath = `/public/upload/${fileName}`;
      ctx.body = {
        code: 200,
        msg: '上传成功',
        data: staticPath, // 确保字段名是 data
      };
    } catch (err) {
      ctx.body = { code: 500, msg: '上传失败' };
    }
  }
}

module.exports = UploadController;