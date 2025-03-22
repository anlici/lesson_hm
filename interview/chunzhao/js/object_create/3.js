// 创建对象 Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: {d:5} };
const res = Object.assign({},target, source); // 保证target不会被改变

console.log(res === target);
console.log(res,res.__proto__); // { a: 1, b: 4, c: 5 } 覆盖  
console.log(target);  // 第一个被替换，
console.log(source);




