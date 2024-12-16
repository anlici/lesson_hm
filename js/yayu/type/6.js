
var a = 10.113;
var b = new Number(a);
console.log(typeof a,typeof b); // number object

// valueof 方法返回一个 Number 对象的基本数字值。
console.log(b.valueOf()); // 10.113
console.log(b.toFixed(2)); // 10.11

console.log(a.toFixed(2)); // 10.11 临时对象？

