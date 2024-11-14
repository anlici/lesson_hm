
import dotenv from 'dotenv';
import OpenAI  from "openai";

// 读取项目根目录下的 .env 文件，并将其中的变量加载到 process.env 对象中
dotenv.config();
// console.log(process.env.OPENAI_API_KEY,'////');

// 示例化openai 客户端 
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,//变量
  baseURL: 'https://api.302.ai/v1' // 转发 
})

// 良好的编程风格 主函数 执行的入口， 单点 函数申明
// function main() {
//   console.log('ai 全栈开始了 ')
// }
// es6 箭头函数 传统函数更简洁 async 是函数修饰符，+  await  一对
// 赋值语句 函数表达式 函数也是对象


    const main = async () => {
  // openai 的调用是异步的  await 等会儿  chat 聊天的方式调用
  // completions 完成问答 create 创建
try {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    // 对话列表
    messages: [
      {
        role: 'user',
        content:[
          {
            type: 'text',
            'text': '请描述以下图片的内容'
          },
          {
            type: 'image_url',
            "image_url": {
              "url": "https://pic4.zhimg.com/v2-267217db1a16cf81a50184ea7d520289_1440w.jpg"
            }
           }
        ]
      }
    ],
    max_tokens:300
  })
  console.log(response.choices[0].message.content);
} catch (error) {
        console.log("认证错误");
}
}


 main()