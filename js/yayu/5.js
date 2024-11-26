const da1 = {
    name:'哈市',
    paly : function () {
        console.log(this);
        console.log('haha');
        
    }
}
// this 指向实例对象 ds ，打印ds对象
// 构造对象过程 
function Person (name,age) {
    console.log(this);
    this.name = name;
    this.age = age;  
}
// person原型为da1 ，包含play方法， 实例对象ds 也有play方法
Person.prototype = da1;
// 先创建新的空对象{}，调用person，this指向新的空对象，打印{}，
// name和age添加到this对象，并且赋值给ds
const ds = new Person('动漫',11);
/* 因为原型da1，会调用paly方法，
先执行console.log(this);，此时 this 指向 ds 对象，
所以打印出 { name: '动漫', age: 11 }
在执行console.log('haha');，打印出 haha */
ds.paly();
// 仓库额外的私有属性  __proto__ 指向原型对象
console.log(ds.__proto__ == da1); // true
