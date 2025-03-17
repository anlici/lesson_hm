console.log(1);
setTimeout(() => {
    console.log(2);
},1000);
new Promise((resolve) => {
    // 1s 后调用resolve，promise状态变成fulfilled 触发`.then()`回调打印 3
    setTimeout(resolve,1000,3) 
}).then((value) => {
    console.log(value);
}).then(() => {
    console.log(4);
});

async function async1() {
    try {
        const v1 = await new Promise((resolve) => {
            resolve(7);
        });
        console.log(v1);
        await async2()
    }catch(e) {
        console.log(e);
    }finally{
        console.log(8);
    }
    console.log(9);
    
}
async1()
async function async2() {
    console.log(5);
    throw 6;
}
console.log(10);
