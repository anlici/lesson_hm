// es6 模块化 导包
import {
    createCrawl, // 返回爬虫实例
    createCrawlOpenAI //openai 配置
} from 'x-crawl';
import dotenv from 'dotenv';
dotenv.config(); //将 .env文件中的环境变量注入到process.env中

const crawlApp = createCrawl({
    maxRetry: 3,
    intervalTime: {max: 2000, min: 100},
})

const crawlOpenAIApp = createCrawlOpenAI({
    clientOptions: {
        apiKey:'sk-...',
        baseURL:'https://api.302.ai/v1/'
    },
    defaultModel:{
        chatModel:'gpt-4-turbo-preview'
    }
})
crawlApp.crawlPage('https://movie.douban.com/chart')
    .then(async (res) => {
        const {page,browser} = res.data;
        const targetSelctor = '.indent'; //绑定indent
        await page.waitForSelector(targetSelctor);// 等待页面出现指定选择器的元素
        const highlyHTML = await page.$eval(
            targetSelctor,
            (el) => el.innerHTML,
        )
        const result = await crawlOpenAIApp.parseElements(
            highlyHTML,
            `
            获取图片链接、电影名称、电影评分、电影简介
            输出格式为json 数组。
            如：
            [{
              "src": "...",
              "title": "...",
              "score": "...",
              "desc": "..."
            }]
            `
          )
       crawlApp.crawlFile({
           targets:result.elements[0].src,
           storeDir: './upload'
       })
       browser.close();
       console.log(result);
    })
    .catch((err) => {
       console.log(err);
   })