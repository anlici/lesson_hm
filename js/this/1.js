"use strict";
var x = 3;
var obj = {
    x:1,
    foo: () => {console.log(this,this.x);
        console.log(x); //外部的x
    }
}
// 函数体赋值给变量
var foo = obj.foo;

obj.foo() // window指向obj，. 取值
// console.log(obj.foo());

foo() // 指向全局,undefined,防止修改全局变量
// console.log(foo());
