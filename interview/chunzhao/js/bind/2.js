var a = [ 0 ]
// if 语句会将条件表达式强制转换为布尔值
// null underfined false 0 '' NaN => false 
if(a) {
    // [0].toString() -> '0' -> 0
    // true -> 1  !== 0 => false
    console.log(a,a == true)
} else {
    console.log('wut');
}

function fn() {
    return 1
}
fn.toString = function () {
    return 20
}
fn.valueOf = function () {
    return 30
}
console.log(fn + 1); // 先valueOf 后 自身toString 后原型链

// 示例 3：浮点数精度问题及解决方案
console.log(0.1 + 0.2 !== 0.3); // 输出: true
console.log(parseFloat((0.1 + 0.2).toFixed(1)) === 0.3); // 输出: true
console.log(Math.abs((0.1 + 0.2) - 0.3) < 1e-10); // 输出: true
console.log((1 + 2) / 10 === 0.3); // 输出: true

// 示例 4：BigInt 的使用限制
console.log(Number(1n + 1n)); // 输出: 2