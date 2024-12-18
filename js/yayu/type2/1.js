var a = 1.123
console.log(a);
var b = new Number(a)
console.log(typeof b);
b.toFixed(2) // 1.00 两位小数 深海
a.toFixed(2) // 1.12 两位小数 自动装修 包装类
// 自动装箱机制 为了一切都是对象
// 不是对象，JS临时创建包装对象，然后调用方法，调用完后销毁