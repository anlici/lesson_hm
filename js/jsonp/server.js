// http 服务启动  commonjs 模块化,node早期， es6 模块化 import
const http = require('http');
// 启动http服务，req 请求， res 响应
// http 基于请求响应的简单协议
// 回调 => 异步， 事件监听
// 请求来的服务器，函数执行；req 请求对象进行解析
/**
 * 拿到资源，resf？直接拿缓存？
 * res 响应对象，响应请求；http 请求结束
 * 基于事件驱动的异步，处理一个请求，同时监听其他请求
 * 实现高并发
 * 回调如果嵌套可能callback hell
 *  => promise和async/await
 * 三次握手建立连接，四次挥手断开连接
 */
const url = require('url');
// const data = {
//     // name: '张三',
//     // // age: 25,
//     // // city: '北京'
// };

const data = [
    {
        name: '张三',
        // age: 25,
        // city: '北京'
    },
    {
        name: '李四',
        // age: 25,
        // city: '北京'
    },
]

const server = http.createServer((req,res) => {
    
    res.end("callback("+JSON.stringify(data)+")");
})

server.listen(3000,() => {
    console.log('服务启动');
});