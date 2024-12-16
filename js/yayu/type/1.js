var a = "1"; // 值
a = Number(a); // 构造函数 
console.log(a);

var b = 1;
console.log( Boolean(b));
console.log(Boolean()); // 为啥构造函数 是false？ 
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false 不是数字

console.log(Boolean(+0),"+0"); //false
console.log(Boolean(-0),"-0"); // false

console.log(1 / + 0); // infinity 无穷大
console.log(1 / - 0); // -infinity 无穷小
console.log(1 / 0); // infinity 无穷大

console.log(Object.is(+0,-0)); // false
console.log(Object.is(5,5)); // true

console.log(2*"a"); // NaN 显示， not a number 不是数字
console.log(2 + "a"); // 2a 隐私转换

console.log(typeof NaN); // number 
// null ？underfined ？转换是object












