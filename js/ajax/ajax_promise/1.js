// resolve 在执行上下文之外，但是在执行栈中
const p = new Promise(() => {
    // for (let i = 0; i < 1000000000; i++) {
    //     if (i === 999999999) {
    //         resolve()
    //     }
    // }
    console.log('1111')
    setTimeout(() => {
        console.log('2222')
    }, 0)
})

console.log('Promise pending...')
