function Person (name,age) {
    console.log(this);
    this.name = name;
    this.age = age;  
}

Person.prototype.name = '红砖';
Person.prototype.hometown = '北京';
let person1 = new Person('动漫',11);
let person2 = new Person('柯南',17);
console.log(person1 == person2);
// js查找机制：
/* 1. 先查找person1自己的私有属性hometown, 没有就
   2.找原型属性是否有，底层是__proto__
*/
console.log(person1.name,person1.hometown,person2.name);

