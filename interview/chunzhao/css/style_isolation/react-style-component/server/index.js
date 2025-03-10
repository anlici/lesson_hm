const http = require('http');

const mockData = "React 18 引入了许多底层改进和新特性，虽然大多数现有应用不需要大幅修改就能升级到 React 18，但对于希望充分利用这些新功能的应用来说，了解如何使用并发模式、自动批处理以及新的钩子将是关键。此外，React 团队还强调了渐进式采用的理念，意味着你不必一次性迁移所有特性，可以根据需要逐步采纳。";

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/stream') {
    // 设置 HTTP 响应头，开启长连接，适用于 SSE
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    // 发送数据
    const sendChunk = (chunk) => {
      res.write(`data: ${chunk}\n\n`);
    };

    const dataArray = mockData.split('');
    let index = 0;

    const interval = setInterval(() => {
      if (index < dataArray.length) {
        sendChunk(dataArray[index]);
        index++;
      } else {
        clearInterval(interval); // 数据发送完毕，清除定时器
        res.end(); // 关闭连接
      }
    }, 100); // 每 100 毫秒发送一个字符
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

// 启动服务器监听端口 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});