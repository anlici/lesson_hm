import OpenAI from "openai";
import dotenv from "dotenv";

// 加载环境变量配置文件
dotenv.config();

// 从环境变量中获取 OpenAI API 密钥和基础 URL
const {
  OPENAI_API_KEY,
  OPENAI_BASE_URL // 提供默认的基础 URL
} = process.env;

// 实例化 OpenAI 客户端
const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  baseURL: OPENAI_BASE_URL
});

// CSV 格式的销售数据
const saleData = `
销售数据:
日期,产品,销量,单价,总收入
2023-01-01,iPhone 13,100,6000,600000
2023-01-01,iPhone 14,50,8000,400000
2023-01-02,iPhone 13,80,6000,480000
2023-01-02,iPhone 14,60,8000,480000
2023-01-03,iPhone 13,120,5800,696000
2023-01-03,iPhone 14,80,7800,624000
`;

// 专业的销售数据分析 prompt 封装
const genSaleReport = async (saleData, query) => {
    const prompt = `
    You are an AI assistant that generates sales reports based on the given data.
    Here is the sales data:\n ${saleData} \n\n
    Please generate a report to answer the following questions: \n
    ${query}
    `;
    
    try {
        let response = await client.chat.completions.create({ // 使用 chat.completions.create
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 1000,
            temperature: 0
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error generating report:', error);
        throw error; // 或者返回一个默认值，根据需要调整
    }
};

const main = async () => {
    try {
        const query = `根据上述销售数据,计算iPhone 13和iPhone 14的总销量各是多少?`;
        const report = await genSaleReport(saleData, query); // 修正 await 拼写错误
        console.log(report);
    } catch (error) {
        console.error('Error in main function:', error);
    }
};

// 执行主函数
main();