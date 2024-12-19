let specialObj = {
    valueOf: function () {
        console.log('valueOf.....');
        return 123;
    },
    toString: function () {
        console.log('toString.....');
        return '456';
    }
}
console.log(specialObj + 1); // 124
// 拦截，使用自定义的valueOf方法
// 
// 拿到 Number 的值 
console.log(Number(specialObj)); // 123
console.log(String(specialObj)); // 456

// let objectWithoutPrimitiveValueOf = {
//     valueOf: function () {
//         console.log('valueOf 2111.....');
//         return this; // 没有原始值 this 就是对象本身,要使用call吗？
//     },
//     toString: function () {
//         console.log('Calling string.....');
//         // return '798';
//         return this; 
//     }
// }

// console.log(objectWithoutPrimitiveValueOf + 1);

// console.log(Number(objectWithoutPrimitiveValueOf)); // 没有toString前 NaN 为什么？

try {
    console.log(Number(objectWithoutPrimitiveValueOf)); // 没有toString前 NaN
} catch (e) {
    console.log(e);
}