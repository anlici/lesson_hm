const http = require('http')
const url = require('url');  // 引入url模块
const path = require('path'); 
const fs = require('fs'); // 引入文件系统模块

http.createServer((req,res) => {
    let {pathname} = url.parse(req.url,true); // 解析url，提取路径部分
    // res.end(pathname);
    if(pathname === '/'){
        // __dirname是当前文件所在目录的绝对路径
        // 部署在服务器上,则使用绝对路径访问文件 path.join 
        fs.createReadStream(path.join(__dirname,'index.html'))
        .pipe(res); // 将文件内容写入到res中
        return;
    }
    let abs = path.join(__dirname,pathname);
    //console.log(abs);
    // res.setHeader('Expires',new Date(Date.now() + 20000).toGMTString())
    // res.setHeader('Cache-Control','max-age=10')
    // 协商缓存
    // res.setHeader('Cache-Control','no-cache') // 304 no modified 

    // 文件存在与否
    fs.stat(abs,(err,stat) => {
        // 缓存时间
        res.setHeader('last-Modified',stat.mtime.toGMTString())
        console.log(stat.mtime.toGMTString());
        // 缓存时间
        if(req.headers['if-modified-since'] === stat.mtime.toGMTString()){
            res.statusCode = 304;
            res.end();
            return;
        }
        if(err){
            res.statusCode = 404;
            res.end('Not Found');
            return;
        }
        if(stat.isFile()) {
            fs.createReadStream(abs).pipe(res);
        } 
    })
})
.listen(8080,() => {
    console.log('server is running at 8080');
});