// js 一切都是对象，面向对象
let arr = [1,2,3];
arr.customProperty = 'add 01';

// 自定义属性不计入长度计算中，但是可以无序插入，并入arr属性
console.log("1234".length,arr.length); // 4,3,长度
console.log(arr); 
arr.push(4);
// 遍历，每个元素执行一个回调函数（匿名,没有函数名），接收一个参数，item
// 自定义属性，不会接收
arr.forEach(function(item){
    console.log(item);
});