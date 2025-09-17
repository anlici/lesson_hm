function myPromiseAll(promises) {
    return new Promise((resolve,reject) => {
        let count = 0;
        const res = [];
        
        if(promises.length === 0) {
            resolve(res);
            return;
        }
        // 并发 一次性 执行完
        promises.forEach((promise,index) => {
            Promise.resolve(promise)
                .then(result => {
                    res[index] = result;
                    count++;
                    if(count === promises.length) {
                        resolve(res);
                    }   
                }).catch(err => {
                    reject(err);
                })
        })
    })
}
