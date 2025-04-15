## css 样式设计
- transform: scaleY(0.5) 垂直方向缩小原来的一半
- border: 10px solid rgba(0,0,0,0.5); 边框 宽度为10px，颜色为半透明
- transform-origin: 50% 50%; 边框的起始点为50% 50%

- **伪元素和伪类**
  - 伪元素：::before, ::after 在元素前后添加内容，一定有content属性 不会生成实际dom 节点，不能通过js 操作，但css 样式进行控制
  - 伪类：:hover, :active, :focus 鼠标移入，激活，获取焦点
    :nth-child(n) odd 奇数 even 偶数
- 绝对定位 参考点怎么选择
  - 父元素相对定位relative，子元素选择其他定位（absolute，fixed），子元素相对父元素绝对定位
  - 相对最近已经定位（非static）祖先进行定位
    如果没有祖先，则相对html 根元素进行定位
  

## 流式输出
- 思考：
  - completion/ chat stream:true
  - 大模型思考 输出流式数据
    基于token 神经网络一个一个token输出，后面基于前面token 的预测结果
  - 大模型不是专有流式，只是stream 增强用户体验
- 网络层：
  http 0.9 
  1.0 
  1.1 
  2.0  服务器推送 服务器伺服状态
  3.0  
- tcp/ip UDP（数据暴露，适合视频、直播）
  响应头 text/event-stream keep-alive
  ctx.res.write(`data: ${chunk}\n\n`)
  
- AGI ：人工智能 多模态能力
  软件+硬件 + 算法 + 数据

- script 标签async defer区别
  - async： js加载马上执行，可能阻塞html解析
  - defer： html 解析完毕后执行，不会阻塞html解析
  语义标签：footer header nav section article aside、
- 浏览器提供getCurrentPosition()方法，获取当前位置信息，但是需要用户允许位置信息，否则会报错。
- web storage api：存储键值对
  - sessionStorage：会话级别，关闭浏览器即失效
  - localStorage：本地存储，关闭浏览器不失效
  - setItem(key,value)
- websocket和http的区别：
  - 心跳：ping pong 桢，确认连接状态，在长轮询也是用的
  - http 一个主动请求对应一个被动响应
  - 服务器网址：http -> ws;https -> wss
  - 轮询，每次请求，造成一定网络开销和延迟
    setTimeout(poll,5000) 后面再poll 第一次请求
  - 在长轮询中，**等待数据更新**，客户端发起请求后，服务器会保持连接打开，直到有数据更新时才返回响应。如果服务器一直没有数据更新，连接会保持一段时间（通常由服务器设置的超时时间决定）。但客户端会通过重新发起请求来继续监听后续的数据更新。
  这种机制确保了客户端能够实时获取最新的数据更新，而不会因为等待而错过新数据。

  - 适合股票，**天气**