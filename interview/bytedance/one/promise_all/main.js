const fs = require('fs');
const res = []
// fs.readFile('./a.txt',(err,data) => {
//     // buffer 二进制 
//     if(err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(data.toString());
//     }
//     res.push(data.toString())
// })
// es6 提供promise，由于回调异步解决方案
const readFilesPromise = (url) => {
    return new Promise((resolve,reject) => {
        fs.readFile(url,(err,data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data) // 
                // console.log(resolve(data));
            }
        })
    })
}
// readFilesPromise('./a.txt')
//     .then(data => {
//         res.push(data.toString())
//         // 异步变同步，链式调用
//         return readFilesPromise('./b.txt')
//     })
//     .then(data => {
//         res.push(data.toString())
//         return readFilesPromise('./c.txt')
//     })
//     .then(data => {
//         res.push(data.toString())
//         // console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log('finally',res);
//     })


// es8 async await
(async () => {
    try {
        const data1 = await readFilesPromise('./a.txt')
        res.push(data1.toString())
        const data2 = await readFilesPromise('./b.txt')
        res.push(data2.toString())
        const data3 = await readFilesPromise('./c.txt')
        res.push(data3.toString())
        console.log(res);
    } catch (error) {
        console.log(error);
        return;
    }
})() 