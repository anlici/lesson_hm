// commonjs 模块化
// js 早期没有模块化，
// 用 函数，类（js 没有），js业务简单 进行页面交互等
// 复杂了，文件分离，模块化需要
// require 保留字
const sqlite3 = require('sqlite3');

// db 数据库连接对象
// 数据库 句柄 ，路径
const db = new sqlite3.Database('./mydatabase.db',
    // node 上 ms 级别 数据库在服务器/硬盘 await 异步 等待
    async(err) => {
        if (err) {
            console.log('数据库连接失败',err);
            return;
        }
        console.log('数据库连接成功');
        // 数据库操作句柄 
        await db.run(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY , // 索引 主键 唯一
            name TEXT not null, // 字符串 不为空
            age INTEGER, // 整数
            email TEXT not null,
            salary integer not null // 整数
        )
        `)
    }
)