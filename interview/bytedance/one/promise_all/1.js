// Promise.all 内置方法
/**
 * 
 * @param {promise[]} promises
 * @return {promise}
 * @desc 
 * 1. 所有promise都成功，返回成功的结果, 按照顺序返回
 * 2. 有一个失败，返回失败的结果 
 */
Promise.MyAll = (promises) => {
  // promises resolved 后的结果
  let arr = [],
      count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      // 微任务
      // then 两个参数 第一个成功的回调 第二个失败的回调
      item
        .then(res => {
          arr[i] = res;  // 按照顺序保存结果
          count++;
          if (count === promises.length) {
            resolve(arr)
          }
        }, reject)
        // .catch(err => {
        //   reject(err)
        // })
    })
  })
}

const weather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds'})
    // reject('error')
  }, 3000)
})

const tweets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I like cake, BBQ is ready now !')
    // reject('BBQ 糊了')
  }, 5000)
})

Promise
  .MyAll([weather, tweets])
  .then(res => {
    console.log(res)
  })