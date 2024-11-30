// node 内置http 模块 用来创建web服务器
const http = require('http');
const OpenAi = require('openai');
const url = require('url'); // node 内置解析url 模块

const client = new OpenAi({
    apiKey: 'sk-DQyFVvlYDkVEcwRy1uY6WOkEz0AUhGeQRdSQ0mXKA4JgCp8M',
    baseURL: 'https://api.302.ai/v1'
  });

const getCompletion =  async (prompt, model="gpt-3.5-turbo") => {
    // 用户提的问题
    const messages = [{
      role: 'user',
      content: prompt
    }];
    // AIGC chat 接口
    const response = await client.chat.completions.create({
      model: model,
      messages: messages,
      // LLM 生成内容的随机性
      temperature: 0.1
    }) 
    // 解析返回结果 js对象里面的结果
    return response.choices[0].message.content
  }
  // req 请求  res 响应
const server = http.createServer(async (req,res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问，也可以指定具体的域名，如'http://example.com'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 允许的请求方法
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头

    const parsedUrl = url.parse(req.url, true); // 解析请求的URL，第二个参数为true表示解析查询字符串
    const queryObj = parsedUrl.query; // 获取查询字符串对象
    console.log(queryObj); 
    const prompt = `
     ${queryObj.data}
     请根据以上JSON数据内容，回答${queryObj.question}这个问题
     `
     const result = await getCompletion(prompt) 
    // const prompt = query.prompt; // 获取查询字符串中的prompt参数
    // info 是返回给前端的信息，
    let info ={
        result
    }
    res.statusCode = 200;
    // 响应头 , 告诉浏览器响应的内容类型是json
    res.setHeader('Content-Type','text/json')
    res.end(JSON.stringify(info))
 })
 
 server.listen(1314,() => {
     console.log('服务器启动成功')
 })