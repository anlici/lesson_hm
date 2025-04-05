
function asyncToGenerator(generator) {
    return function () {
        return new Promise((resolve, reject) => {
            const gen = generator.apply(this,arguments)
            function step(key, arg) {
                let result = gen.next(arg)
                if(result.done) {
                    resolve(result.value)
                } else {
                    result.value.then(val => step('next', val), err => step('throw', err))
                }
            }
            // step('next')
            step()
        })
    }

}
function *text() {
    let res1 = yield Promise.resolve('hello ')
    let res2 = yield Promise.resolve('world')
    return res1 + res2
}
const textGenerator = asyncToGenerator(text)
textGenerator().then(res => {
    console.log(res)
})