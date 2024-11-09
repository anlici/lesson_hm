
// RSH 查找失败 爆出referenceError
function foo(a) {
    console.log(a+b); //RSH 引用，其中一个不是数字
    var b = 3;
    b = a;
    console.log(a,b);
    c = 0;//LSH 查找失败 声明一个全局变量c
}
foo(2);//RSH

console.log(c);