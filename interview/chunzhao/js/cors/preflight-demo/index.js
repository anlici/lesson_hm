const http = require('http');

const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'ACCess-Control-Allow-Headers': 'Content-Type, Authorization, X-Custom-Header',
    'Access-Control-Max-Age': '86400',
  }
  if (req.method === 'OPTIONS') {
    // 预检请求 200 201 Created 204 No Content + 预检请求
    res.writeHead(204, headers)
    console.log('预检请求')
    res.end()
  }
  if (req.method === 'PUT' && req.url === '/data') {
    res.writeHead(201, headers)
    res.end('PUT 请求成功')
  } else {
    res.writeHead(404, headers);
    res.end('404 Not Found')
  }
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})