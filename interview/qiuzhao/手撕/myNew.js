function myNew(fn,...args) {
    if(typeof fn !== 'function') {
        throw new TypeError('fn must be a function');
    }
    // let obj = {};
    // obj.__proto__ = fn.prototype;
    let obj = Object.create(fn.prototype);
    let res = fn.apply(obj,args);
    return res instanceof Object ? res : obj;
}
function Person(name,age) {
    this.name = name;
    this.age = age;
}
const p = myNew(Person,'daiyousheng',18);
console.log(p);