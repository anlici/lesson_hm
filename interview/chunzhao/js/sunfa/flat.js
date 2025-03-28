// 递归 + reduce
function flatter(arr) {
    return arr.reduce((pre,cur) => 
       pre.concat(Array.isArray(cur) ? flatter(cur) : cur),[])
}
// 递归+forEach
function flatter2(arr,res = []) {
    arr.forEach(item => {
        if(Array.isArray(item)) {
            flatter2(item,res)
        } else {
            res.push(item)
        } 
    })
    return res
}
// 队列 层级展开； 栈模拟也行（下面展示队列的思路）
function flatter3(arr) {
    const queue = [...arr]
    const res = [];
    while(queue.length) {
        const item = queue.shift()
        if(Array.isArray(item)){
            queue.unshift(...item); // 展开当前层级，插入对头
        } else {
            res.push(item)
        }
    }
    return res;
}
// 适用数组 
function flatter4(arr) {
    return arr.toString().split(',').map(Number)
}
// 适用字符串
function flatter5(arr) {
    return JSON.parse("["+JSON.stringify(arr).replace(/\[|\]/g,'')+"]")
}
const arr = [1,2,[3,4,[5,6]]]
console.log(flatter2(arr))
console.log(flatter(arr))
console.log(flatter3(arr));
console.log(flatter4(arr));
console.log(flatter5(arr));



