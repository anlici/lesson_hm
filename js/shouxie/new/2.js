function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log(this.name);
}
// 写函数，实现

function objectFactory() {
    console.log(arguments);
    
    // 1.创建一个空对象
    // let obj = {};
    const obj = new Object(); // 空对象
    // every.from? arguments 转成数组? 
    // this 指向 obj ，argument虽然
    // call 方法改变this指向, 让构造函数中的this 指向obj 
    // [].shift 数组调用shift ，使用.call 方法改变this指向,指向arguments ，call 内部转变为数组
    // 为什么每次删除第一个元素？ 因为第一个元素是构造函数，删除第一个元素，剩下的元素就是构造函数的参数
    const Constructor = [].shift.call(arguments); //arguments 是类数组,所有参数的数值，shift 方法删除第一个元素
    console.log(arguments,Constructor);
// apply 一次传入数组
    Constructor.apply(obj,arguments);//改变this指向,使用apply 方法改变this指向,指向arguments ，apply 内部转变为数组
    // 为什么传入apply两个参数？ 第一个参数是this指向，第二个参数是数组
    // 引用关系
    // 为啥还有一个__proto__ 指向 Person.prototype ？？
    obj.__proto__ = Constructor.prototype;// 手动__proto__ 指向 Person.prototype ，让实例化的对象可以访问 Person.prototype 上的方法
    return obj;
}

let awei = objectFactory(Person,'awei',18);
console.log(awei.name);
awei.sayName();