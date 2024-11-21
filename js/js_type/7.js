// js 一切都是对象，面向对象
let arr = [1,2,3];
arr.customProperty = 'add 01';

"123".length;
console.log(arr.length); // 3,长度
arr.push(4);
// 遍历，每个元素执行一个回调函数（匿名,没有函数名），接收一个参数，item
// 
arr.forEach(function(item){
    console.log(item);
});