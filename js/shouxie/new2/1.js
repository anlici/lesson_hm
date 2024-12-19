function objectFactory(Fun,...args) {
    let obj = {};
    obj.__proto__ = Fun.prototype;
    const ret =  Fun.apply(obj,args); // 不明确数量，全给上
    console.log(ret);
    // 如果
    return typeof ret === 'object' ? ret : obj;
}

/**
 * 1. 构造函数执行，this指向obj，对象属性构建；\
 * 2. 对象的私有属性__proto__指向构造函数的原型对象；\
 * 3. 如果有返回值，就返回该返回值，否则返回obj；
 */

function Person(name,age) {
    this.name = name;
    this.age = age;
    // return "我是返回值"
    // 继承 封装
    return {
        name: this.name,
        age: this.age,
        tag: "我是返回值"
    }
}
Person.prototype.sayName = function () {
    console.log('名字是'+this.name);
}

let awei = objectFactory(Person,'会晤',18);
console.log(awei,awei.__proto__);