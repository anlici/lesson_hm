var a = 'global';
var obj = {
    a: 1,
    foo: foo()
}
function foo() {
    console.log(this.a);
}

//类数组，指的是有length等少数属性的“伪数组”，有nodelist，nodehtml等有
// 使用 bind 方法将 obj.foo 绑定到 obj 上
setTimeout(obj.foo.bind(obj), 1000);
function setTimeout(fn, delay) {
    fn();//调用位置
}
