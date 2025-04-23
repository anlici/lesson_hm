const http2 = require('http2');
const fs = require('fs');

const server = http2.createServer();

server.on('stream', (stream, headers) => {
    const fileName = headers['file-name'];
    const totalChunks = parseInt(headers['total-chunks']);
    const chunkIndex = parseInt(headers['chunk-index']);

    const filePath = `./${fileName}.part${chunkIndex}`;
    const fileStream = fs.createWriteStream(filePath);// 创建一个写文件流

    stream.on('data', (chunk) => {
        writeStream.write(chunk);
    });

    // 监听流的结束事件
    stream.on('end', () => {
        writeStream.end();
        if (chunkIndex === totalChunks - 1) {
        stream.respond({ ':status': 200 });
        stream.end('Upload complete');
        } else {
            // 如果不是最后一个块，则返回206 Partial Content响应
        stream.respond({ ':status': 206 }); // Partial content
        stream.end('Chunk received');
        }
    })
})

server.listen(3000, () => {
    console.log('HTTP/2 server running on port 3000');
  });