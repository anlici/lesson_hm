function greet(name){
    console.log(`hello123`,name);
}
//greet('倾城');
// 添加属性
greet.age = 18;
// 添加方法
greet.proGreeting = function(name){
    return `hello11,${name}`;
}

console.log(greet.proGreeting);// 打印定义
//console.log(greet.age);
function invokeGreeting(pro,name) {
    // return proGreeting(this)
    return pro(name);
}
// 函数作为参数，
console.log(invokeGreeting(greet,'微微'));
console.log(greet.proGreeting('测试'));
console.log(invokeGreeting(greet.proGreeting,'小娃娃'));