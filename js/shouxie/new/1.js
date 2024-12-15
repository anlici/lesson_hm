// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayName = function () {
//     console.log(this.name);
// }
// // new 实例化运算符 {} 和Person.prototype 建立联系 方式：
// // {} 指向 __proto__ object.prototype
// // 手动__proto__ 指向 Person.prototype ，让实例化的对象可以访问 Person.prototype 上的方法

// const awei = new Person('awei辣',18);
// const bwei = new Person('bwei酸',19);
// console.log(awei);

function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    console.log(this.name);
}
const awei = new Person('张三');
const bwei = new Person('李四');

console.log(awei.name); // 张三 调用属性
bwei.sayName()  // 李四 调用新增方法

