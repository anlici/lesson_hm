// Number 显示转成Nubmer
console.log(Number("1")); // 1
console.log(Number()); // 0 
// undefined 数值上下文没有转成一个特定数字，但是null 可以填0
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(NaN)); // NaN

console.log(Number(false)); // 0
console.log(Number(true)); // 1

console.log(Number("0x11")); // 16进制转换 17
console.log(Number("0b11")); // 2进制转换   3

console.log(Number(" "),Number("-123")); // 空格转成0  -123
console.log(Number("123a")); // NaN 







