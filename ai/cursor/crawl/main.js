// main.js
const request = require('request-promise');
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// 定义CSV写入器
const csvWriter = createCsvWriter({
    path: 'tophub.csv',
    header: [
        { id: 'title', title: '标题' },
        { id: 'heat', title: '热度' },
        { id: 'link', title: '链接' }
    ]
});

async function fetchWeiboHotSearch() {
    try {
        // 发送HTTP请求获取页面内容
        const html = await request('https://tophub.today/n/KqndgxeLl9');

        // 使用cheerio加载HTML
        const $ = cheerio.load(html);

        // 解析热搜列表
        const hotSearches = [];
        $('.tb-table tr').each((index, element) => {
            if (index > 0) { // 跳过表头行
                const titleElement = $(element).find('td:nth-child(2) a');
                const title = titleElement.text().trim();
                const link = 'https://tophub.today' + titleElement.attr('href');
                const heat = $(element).find('td:nth-child(3)').text().trim();

                hotSearches.push({ title, heat, link });
            }
        });

        // 写入CSV文件
        await csvWriter.writeRecords(hotSearches);
        console.log('微博热搜已保存到 tophub.csv');
    } catch (error) {
        console.error('抓取微博热搜时出错:', error);
    }
}

fetchWeiboHotSearch();