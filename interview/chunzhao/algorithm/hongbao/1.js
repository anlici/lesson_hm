function hongbao(total, num) {
    const arr = [];
    let restAmount = total;
    let restNum = num;
    for(let i = 0; i < num-1; i++) {
        let amount = parseFloat(
            Math.random() * (restAmount / restNum * 2 - 0) // 二倍均值算法
        ).toFixed(2);
        restAmount -= amount;
        restNum--;
        arr.push(amount);
        
    }
    arr.push(restAmount.toFixed(2));
    
    return arr;
}
// hongbao(100,3)
console.log(hongbao(100,6));

let a = {
    a:1,
    b:2,
    c:3,
}
// console.log(a.toFixed(5));

// Object.entries(a).forEach(([key,value])=>{
//     console.log(key,value);
// })

// console.log(Object.keys(a));
const arr = ['阅读','yuedu','阅读金典','赌约']
// 转成['赌约','阅读','阅读金典','yuedu'],也就是先按长度排序，再按首字母排序
function sortArr(arr) {
    return arr.sort((a,b) => {
        if(a.length === b.length) {
            return a.charCodeAt(0)-b.charCodeAt(0);
        } else {
            return a.length - b.length;
        }
    })
}
console.log(sortArr(arr));

// const ans = {'4':5,'1':2,'2':3};
// console.log(Object.keys(ans).sort((a,b)=>{
//     return ans[a] - ans[b];
// }))


