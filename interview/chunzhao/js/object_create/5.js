let obj = {};
Object.defineProperties(obj, {
    a: {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    },
    b: {
        value: 2,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
// 
console.log(obj); // { a: 1, b: 2 }