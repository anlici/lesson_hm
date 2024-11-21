function greet(name){
    console.log('hello',name);
}
greet('倾城');
// 添加属性
greet.age = 18;
// 添加方法
greet.hello = function(name){
    return 'hello,${name}'
}
console.log(greet.hello);
function invokeGreeting(hello,name) {
    return hello(this)
}
// 函数作为参数，
console.log(invokeGreeting(greet,'微微'));