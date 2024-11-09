var a ;
a = 1;

var b = 4;
function foo() {
    console.log(a,b);//重新声明为局部，编译阶段完成声明，undefined
    // 忽略 a = 1,重新声明一个a
    var a = 2; //先在当前函数作用域中查找a，没有找到，再去全局作用域中查找a
    function bar() {
        var a = 3;
        return a+b;
    }
    // 忽略 a = 2,重新声明一个a
    var a = 4;
    console.log(a,b,bar());
}

foo();