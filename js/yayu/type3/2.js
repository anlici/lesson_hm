
// this 指向实例对象，
// 构造对象过程 
function Person (name,age) {
    this.name = name;
    this.age = age;
    this.eat() // 方法  实例对象上没有  去原型链上找
}
// 方法
Person.prototype.eat = function () {
    console.log('吃饭');
}
const wen = new Person('wen'); // age 为 undefined
console.log(wen);

