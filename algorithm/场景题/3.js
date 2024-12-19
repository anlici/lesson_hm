// // es6 新增Set 集合  无序 不重复
// const set = new Set();
// set.add(1,2,3); //默认？
// set.add(4);
// set.add(5);
// set.add(5);
// set.forEach(item => {
//     console.log(item);
// })
// console.log(set.size); // 3 add增加 5 重复

const arr = [1,1,4,5,5];


// set 
const set1 = new Set(arr); //set 类型 

var uniqueArr = [... set1]; // 展开运算符， 数组
let set2 = Array.from(set1); // 静态方法

console.log(uniqueArr);
console.log(set1,set2);

