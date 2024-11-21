// 数值范围有限，使用科学计数法
let num1 = 9999999999999999999999999;
let num2 = 1;
//console.log(num1+num2); // 1e+20
let num3 = 123232122222222212222222222;
//console.log(num1+num3);//1.123423498e+21
// 后面加个n，使用 bigint
let num4 = 9999999999999999999999999n;
let num5 = 112231232n;
console.log(num4+num5);//10000000000000000112231231n ,正确