// 成功按照顺序返回，有一个失败直接返回失败结果
Promise.MyAll = function (promises) {
    let arr = [],
        count = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((item,i) => {
            item
                .then(res => {
                    arr[i] = res;// 顺序返回
                    count++;
                    if( count === promises.length) {
                        resolve(arr); // 返回成功结果
                    }
                },reject)// 占位
                // .catch(err => 
                //     reject(err)
                // );
        });
})
}