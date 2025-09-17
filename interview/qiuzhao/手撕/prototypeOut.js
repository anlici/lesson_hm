// var a = function () { this.cc = 3 }
// var b = 7;
// a.prototype.b = 1;
// const c = new a();

// console.log(b); // 输出 7
// console.log(c.b); // 输出 1

// var a = function () { this.cc = 3 }
// var b = 7;
// const c = new a();
// a.prototype = { b: 3 };

// console.log(b); // 输出 7
// console.log(c.b); // 输出 undefined

var a = function () { this.b = 3 }
var b = 7;
a.prototype.b = 1;
const c = new a();

console.log(b); // 浏览器端输出 3，Node 端输出 7
console.log(c.b); // 输出 3