## 螺旋
- 螺旋
  考虑边界 top left right bottom
  1. 顺时针旋转
  2. top <= bottom && left <= right
  3. 
```js
const PromiseAll = (promises) => {
  return new Promise((resolve,reject) => {
    let count = 0;
    let res  = [];
    if(promises.length === 0) return resolve(res)
    promises.forEach((item,index) => {
       Promise.resolve(item)
        .then(data => {
          res[index] = data;
          count++; // 循环次数

          // 都完成 调用resolve
          if(count === promises.length) {
            resolve(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  })
}
```