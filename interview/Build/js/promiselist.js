// 限制并发数量 递归run 启动新任务 
function promiseLimit(promises, limit) {
    return new Promise((resolve, reject) => {
        const results = [];
        let index = 0;
        let count = 0;
        function run() {
            if(index === promises.length && count === 0){
                resolve(results);
                return
            }
            while(count <limit && index <promises.length) {
                const i = index++;
                count ++;
                Promise.resolve(promises[i]).then(result => {
                    results[i] = result;
                    count --;
                    run();
                }).catch(err => {
                    reject(err);
                });
            }
           
        }
        run();
    });
}