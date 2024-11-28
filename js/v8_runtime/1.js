console.log(a, func)
// console.log(b)     // 词法环境中的变量/常量 ， 在声明之前不可以访问  这种就叫暂时性死区  TDZ
var a = 1;
function func() {

}
let b = 2
b++  //在词法环境查找b
console.log(b); // 3
