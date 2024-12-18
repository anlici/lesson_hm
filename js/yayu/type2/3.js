// // 调用object原型链上toString方法， [object Object] 第一个object 第二个确切类型
// console.log(({a:1,b:2}).toString());
// console.log(Object.prototype.toString.call({a:1}));
// console.log(Object.prototype.toString.call([1,2,3]));

// console.log([1,2,3].toString());
// stringify 展现全部内容
// console.log(JSON.stringify({a:1}));

console.log(String({a:1})); // [object Object]
console.log(String([1,2,3])); // 1,2,3 

console.log((function (){
    var a = 1;}) );

// 数组展示内容有意义，函数等返回object 简单的展示内容
console.log(String(new Date(2024,12,18)) ); //

