const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});
// promise 
// await fs.readFile
// 文件内容 + 问题 -》 Prompt Engineering (上下文)
// 返回   RAG chatbot
// promise 语法糖 + generator

const readCourseInfo = () => {
  return new Promise((resolve, reject) => {
    try{
      const filePath = path.join(__dirname, '课程信息.txt');
      fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) {
          reject(err)
        }
        resolve(data)
      })
    } catch(err) {
      reject(err)
    }
  });
}
const answerQuestion = async () => {
  const courseInfo = await readCourseInfo();  // I/O 
  console.log(courseInfo, '/////')
}
const question = '有几门课程啊？'
answerQuestion(question)
  .then(answer => {
    console.log(answer)
  })