const WebSocket = require('ws');
const http = require('http');

// 先http连接一次,确认服务器位置
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain' // 纯文本
  });
  res.end('webscoket server\n');
});

const wss = new WebSocket.Server({
    server,
    path:'/ws'
})

wss.on('connection',(ws) => {
    ws.on('message',(message) => {
        console.log(`received:${message}`)
        ws.send(`server:${message}`)
    })
    ws.send('server:hello')
})
server.listen(8080,() => {
    console.log('server start')
})
