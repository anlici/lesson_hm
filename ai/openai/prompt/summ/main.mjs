// 引入
// 初始化
import dotenv from 'dotenv';
import OpenAI  from "openai";
// 配置
dotenv.config();
console.log(process.env);
// key 放入.env文件，在precess.env 
// node里面的进程对象中,启动一个进程process，负责一个env环境对象，  调用

// 进程是分配资源的最小单位，线程是执行的最小单位
// v8引擎，内存权限、CPU （操作系统）权限，线程共享内存权限， 进程不共享内存权限
// 进程唯一id，
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL:process.env.OPENAI_API_URL
})
// es6 默认参数 model
// 调用llm 完成接口函数，可以复用
const getCompletion = async(promote,model="gpt-3.5-turbo") =>{
    // 模拟用户提出的问题
    const messages = [{
        role:'user',
        content:promote // 内容
    }];
    // AIGC chat 接口
    const res = await client.chat.completions.create({
        model:model,
        messages:messages,//对话数组
        temperature:0.7 // 随机性 0-1 越大越随机 0 越确定
    })
    return res.choices[0].message.content;

}
// 准备单点入口
const main = async() => {
    const prod_review = `
        我女儿生日时买了这个熊猫毛绒玩具，她很喜欢，到处都带着。
        它柔软、超级可爱，脸看起来很友好。
        不过，相对于我付的价格来说，它有点小。
        我想，同样的价格，也许还有其他更大的选择。
        它比预期早到了一天，所以我有机会自己玩了一会儿，然后才把它送给她。
        `;
        // 给他一个角色，准确表达需求，较少出错
    const prompt = `
        请你分析以下产品评论的情感，来自电子商务平台的用户评论。
        评论内容是：${prod_review}，需要进行摘要和总结，最大30个字。
        `;
    const promt1 = `
        你的任务是生成来自电子商务平台的用户评论摘要，以便向运输部门提供反馈。
        摘要需要进行摘要和总结，最大30个字，并且重点关注任何提及运输和价格交付的方面。
        评论内容是：${prod_review}
        `;
    const response = await getCompletion(promt1,'gpt-4o');
    console.log(response);

}

main();