const fs = require('fs');
// 访问 promise-based 文件系统
const fsPromises = fs.promises; // fs 异步化 promisify 
const koa = require('koa');
const app = new koa();

const main = async ctx => {
    ctx.response.type = 'html';
    // console.log(fsPromises.readFile('./index.html')); //Promise { <pending> }
    
    // 异步变同步 访问文件
    ctx.response.body = await fsPromises.readFile('./index.html');
}
app.use(main);
app.listen(3001);
