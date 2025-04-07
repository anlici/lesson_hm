const maopao = () => {
    for(let i = 0; i < 10-1; i++) {
        let f = false;
        for(let j = 0;j<10-i;j++) {
            if(arr[j] > arr[j+1]) {
                [arr[i],arr[j+1]] = [arr[j+1],arr[i]];
                f = true;
            }
        }
        if(!f) break;
    }
    return arr;
}
const kuaipai = (arr) => {
    if(arr.length <= 1) return arr;

    const privot = arr[Math.floor(arr.length / 2)]
    const left = arr.filter(item => item < privot);
    const right = arr.filter(item => item > privot);
    const equal = arr.filter(item => item === privot);

    return kuaipai(left).concat(equal,kuaipai(right))
}
// flat(Infinity)
function flatter(arr) {
    arr.forEach(item => {
        if(Array.isArray(item)) {
            flatter(item)
        } else {
            res.push(item)
        }
    });
    return res;
}
function flatter(arr) {
    return arr.reduce((pre,cur) => 
        pre.concat(Array.isArray(cur) ? flatter(cur) : cur),[]
    )
}
function filterArray(arr) {
    let isObject = (obj) => {
        return typeof obj === 'object' && obj !== null && !Array.isArray(obj)
    }
    return arr.filter(item => 
       isObject(item) && Object.keys(item).length > 0
    )
}

const arr = [
    { a: 1 }, // 非空对象，保留
    {}, // 空对象，过滤
    null, // null，过滤
    [1, 2, 3], // 数组，过滤
    { b: 2 }, // 非空对象，保留
    'string', // 非对象，过滤
    123 // 非对象，过滤
];

console.log(filterArray(arr)); // 输出：[{ a: 1 }, { b: 2 }]

const promiseAll = (promises) => {
    return new Promise((resolve,reject) => {
        if(!Array.isArray(promises)) {
            return reject('参数必须是数组')
        }
        let res = [];
        let complted = 0;
        const total = promises.length;
        if(total === 0) {
            return resolve(res)
        }
        promises.forEach((item,index) => {
            Promise.resolve(item)
              .then(value => {
                res[index] = value;
                complted +=1
                if(complted === total) {
                    resolve(res)
                }
              })
              .catch(err => {
                reject(err)
              })
        })
    })
}
const promiseRace = (promises) => {
    return new Promise((resolve,reject) => {
        if(!Array.isArray(promises)) {
            return reject('参数必须是数组')
        }
        
        promises.forEach((item) => {
            Promise.resolve(item)
              .then(resolve,reject)
        })
    })
}
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 500));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 100));
const promise3 = new Promise((_, reject) => setTimeout(() => reject('Error'), 200));

promiseRace([promise1, promise2, promise3])
    .then(result => {
        console.log(result); // 输出: 2
    })
    .catch(error => {
        console.error(error); // 如果 promise3 先完成，输出: Error
    });

    