console.log([1,2,3].map(parseInt)); // [1, NaN, NaN] 作为函数占位
// 返回的是一个数组，数组的每一项是parseInt的返回值
// parseInt 
console.log([1,2,3].map( (v) => parseInt(v)));
 // 箭头函数返回 [1, 2, 3]

console.log([1,2,3].map( (v,index,item) => {
    console.log(v,index,item);
    
    return parseInt(v,index,item)
})); // 箭头函数返回 [1, NaN, NaN]


