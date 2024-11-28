
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config() // 读取.env 配置内容到possess.env文件中
// promise 进程对象，
const client = new OpenAI({
  // node 里的进程对象
  apiKey: process.env.OPENAI_API_KEY,
  baseURL:process.env.OPENAI_BASE_URL
})
// es6 默认参数值
// 通用的LLM 聊天完成接口函数， 复用
// 封装 通用大模型聊天接口函数，初始化聊天接口，
const getCompletion =  async (prompt, model="gpt-3.5-turbo") => {
  // 用户提的问题
  const messages = [{
    role: 'user',
    content: prompt
  }];
  // AIGC chat 接口
  // 
  const response = await client.chat.completions.create({
    model: model,
    messages: messages,
    // LLM 生成内容的随机性
    temperature: 0.9
  }) 
  // 解析返回结果 js对象里面的结果
  return response.choices[0].message.content
}

const main = async () => {
    const user_messages = [
        "La performance du système est plus lente que d'habitude.",  //系统的性能比平时慢         
        "Mi monitor tiene píxeles que no se iluminan.",              //我的显示器有些像素点不亮。
        "Il mio mouse non funziona",                                // 我的鼠标坏了
        "Mój klawisz Ctrl jest zepsuty",                            // 我的Ctrl键坏了
        "我的屏幕在闪烁"                    
    ]
// for of es6遍历：
    for(let issue of user_messages) {
         console.log(issue);
    
    const prompt = `
     Tell me what language this is "${issue}"
     `
     const countryLanguage = await getCompletion(prompt);

     const resultPrompt = `
       帮我翻译以下文字到中文，"${issue}"
       `
      const result = await getCompletion(resultPrompt)
      console.log(`是${countryLanguage},翻译结果是：${result}`);
    }

}
main();