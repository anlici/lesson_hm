

console.log(+"1"); // 1  一元运算符 隐私类型转换number

console.log(+ []) // 0 空字符串number 就是0;

console.log(+ ['1']); // 1 只要一个数，不带“，”
console.log(+ ['1', '2']); // NaN
console.log(+ ['1,2,3']); // NaN 

console.log(+ {}); // NaN {} => {} => [object Object] => NaN


console.log(1 + "1"); // 11  二元运算符 字符串拼接

console.log([] + {}); // [object Object]
console.log({} + {} ); // [object Object][object Object]

console.log(true == '1'); // true
console.log(true == '2'); // false






