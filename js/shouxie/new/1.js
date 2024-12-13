function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log(this.name);
}
// new 实例化运算符 {} 和Person.prototype 建立联系 方式：
// {} 指向 __proto__ object.prototype
// 手动__proto__ 指向 Person.prototype ，让实例化的对象可以访问 Person.prototype 上的方法
// 构造函数 this指向{} 
const awei = new Person('awei',18);
console.log(awei);
