// 爬虫 request-promise 负责发生请求
// node 早期 commonjs 模块化
const request = require('request-promise')
// cheerio 解析request 拿到的HTML 字符串
const cheerio = require('cheerio')
// csv 逗号隔开的数据格式
const createCsvWriter = require('csv-writer').createObjectCsvWriter

// 配置项 
const HOT_URL = 'https://tophub.today/n/KqndgxeLl9';
// network http 请求
request(HOT_URL)
   .then(html => {
        // cheerio解析HTML 得到热搜数据，
        // 内存模拟浏览器，load 加载HTML字符串 
        const $ = cheerio.load(html)
        const hotSearchList = [];
        // 遍历热搜列表 子选择器
        $('.jc table tr').each((index,element) => {
            // console.log(index,element);
            // ${node}.find(querySelector) 选择器  .text() 获取文本 .trim() 去除空白字符
            const title = 
            // 第2个td
            $(element).find('td:nth-child(2)').text().trim();
            const head = 
            $(element).find('td:nth-child(3)').text().trim();
            // 第2个td 的a标签，href 属性
            const link = 
            $(element).find('td:nth-child(2) a').attr('href').trim();
            hotSearchList.push({
                rank:index + 1,title,head,link
            })
            // console.log(title);
        })
        // 写入csv ,启动
        const cssWriter  = createCsvWriter({
            path:'./hotSearch.csv',
            header:[
                {id:'rank',title:'排名'},
                {id:'title',title:'标题'},
                {id:'head',title:'热度'},
                {id:'link',title:'链接'}
            ],

        })
        cssWriter
                .writeRecords(hotSearchList)
                .then(() => console.log('写入完成') )
                .catch(err => console.log(err))
        
   })

