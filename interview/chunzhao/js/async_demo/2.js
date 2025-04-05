// then -> generator * yeild -> co -> async await
function asyncToGenerator(generatorFunc) {
    
    return function () {
        const gen = generatorFunc.apply(this, arguments); // 生成器函数执行,生成器对象，调用next
        return new Promise((resolve, reject) => {
            function step(key,arg) {
                let generator;
                try {
                    generator = gen[key](arg);
                } catch (error) {
                    reject(error);
                }
                const {value, done} = generator;
                if(done) {
                    return resolve(value);
                } else {
                    return Promise.resolve(value).then(
                        val => step('next', val), 
                        err => step('throw', err)
                    )
                }
            }
            step('next')
        })
    }
}

// 生成器函数
function *textGenerator() {
    const res1 = yield Promise.resolve('hello ');
    const res2 = yield Promise.resolve('world');
    return res1 + res2;
}

const aysncFunc = asyncToGenerator(textGenerator);
aysncFunc().then(res => {
    console.log(res);
});
