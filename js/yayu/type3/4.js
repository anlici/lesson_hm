
// this 指向实例对象，
// 构造对象过程 
function Person (name,age) {
    console.log(this);
    this.name = name;
    this.age = age;
}
Person.prototype = {
    sleep : function() {
        console.log(`${this.name} 睡觉了`);
    }
}

const ds = new Person('小象',10);
ds.sleep();