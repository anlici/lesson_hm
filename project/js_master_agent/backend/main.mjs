import OpenAI from "openai"; 
// es5 js没有模块化能力 简单 不需要模块化， 交给函数就可以了
// 入口文件 
// mjs  es6 模块化 

const client = new OpenAI({
  apiKey: "sk-EotDnSmaUpIchUFfXMOpmx0QBHUPe43c2Rr8UOUiEzBwCYUJ",
  baseURL: "https://api.302.ai/v1"
})

const main = async () => {
  // AIGC  图片
  const response = await client.images.generate({
    model: "dall-e-3",
    prompt: "A spaceship flying through the universe.",
    n: 1,
    size: "1024x1024",
  })
  console.log(response.data[0].url)
}

main();