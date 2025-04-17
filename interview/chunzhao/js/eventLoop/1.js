let res = [];

// var i 共享全局变量 i

// 使用 let 声明，形成块级作用域
for (let i = 0; i < 10; i++) {
    // 闭包捕获的是变量的引用，而不是变量的值
    res.push(function() {
        console.log(i);
    })
}
res[0](); // var 输出 10 改用let 块级作用域，输出0

// 使用 IIFE 捕获 var 变量；每次迭代创建一个新的作用域
for (var i = 0; i < 10; i++) {
    (function(i) {
        res.push(() => console.log(i));
    })(i);
}
res[8](); // 输出 8

// 使用 bind 绑定参数
for (var i = 0; i < 10; i++) {
    // 只绑定
    res.push(console.log.bind(null, i));
}
res[20](); // 输出 0