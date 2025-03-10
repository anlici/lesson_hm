const map = new Map(); // 存储所有代理对象,key 是数据对象

let obj = {};
map.set('a',1);
map.set(obj,2);

// let obj2 = {
//     obj:3
// }
// console.log(typeof obj2.obj);
// console.log(typeof obj2['obj']);

// for(let key in obj2) {
//     console.log(key,typeof key);
// }

delete obj; // 手动删除obj 触发垃圾回收机制