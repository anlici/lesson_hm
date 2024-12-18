// + 连接 运算符 二元运算符
console.log([] + []); // ""  空字符串 
// 两端all数字，使用加法运算； any 非数字，使用字符串拼接
// toPrimitive 再次调用toString方法 进行拼接


// 一元运算符  隐私类型转换 
console.log(+ [1,2]); // NaN
console.log([1,2] + []); // 12 
// 内容相同，但是内存位置不一样
console.log([] == []);// false 不同对象

let x = 42
let y =  {
    valueOf: function() {
        return x;
    }
}
console.log(y == 42); // true


