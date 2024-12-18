
// this 指向实例对象，
// 构造对象过程 
function Person (name,age) {
    console.log(this);
    
    this.name = name;
    this.age = age;
    
}

Person('哈市',10); // 普通方式
const ds = new  Person('动漫',11);
