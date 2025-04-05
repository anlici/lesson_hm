// es6 * 生成器函数 ， yield 暂停函数，next 继续执行函数
function* gen() {
  console.log('start');
  yield 1;
  console.log('end');
  yield 2;
}
// let it = gen();
// console.log(it.next());
// console.log(it.next()); // { value: 2, done: false }
// console.log(it.next()); // { value: undefined, done: true }

// 异步内容进行同步控制；先执行一次拿到value，并且传递给next，
// 再promise递归拿到value，传递给next，依次类推，直到done为true，结束循环，返回结果。
function co(gen) {
    const generator = gen();// 生成器对象
    return new Promise((resolve,reject) => {
        function step(newValue) {
            if(newValue.done) {
                return resolve(newValue.value);// true
            } 
            Promise.resolve(newValue.value).then(res => {
                console.log(res);
                return step(generator.next(res));
            }).catch(err => {
                return reject(err);
            })
        }
        step(generator.next());
    })
}

// promise
co(
    gen
).then(res => {
    console.log(res);
})