// 大写
var toUpperCase = function (x) {
    return x.toUpperCase();
}
// 字符拼接
var hello = function (x) {
    return "hello " + x;
}
// es6 ... 
// const compose = (...fns) => arg => fns.reduceRight((composed,f) => f(composed),arg)

// const compose = (f,g) => {
//     // 闭包
//     return (x) => {
//         return f(g(x));
//     }
// }

const compose = function() {
    var args = arguments; //类数组对象 es5
    var start = args.length - 1; // 倒序 先里面执行 最右边 
    return function() {
        var i = start;
        // 指定this 指向，并且传参，
        var result = args[i].apply(this, arguments);
        while (i--) {
            result = args[i].call(this, result);
        }
        return result;
    }
}
// 函数组合
var greet = compose(hello, toUpperCase);

// var greet = function (x) {
//     return hello(toUpperCase(x));
// }
console.log(greet('world'));