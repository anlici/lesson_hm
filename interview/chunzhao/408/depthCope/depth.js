function deepClone(obj,hash = new WeakMap()) {
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }
    
    if(hash.has(obj)) {
        return hash.get(obj);
    }
    const cloneObj = Array.isArray(obj) ? [] : {};
    hash.set(obj,cloneObj);
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key],hash);
        }
    }
    return cloneObj;
}
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
deepClone(target);
console.log(target);



// function clone(target, map = new WeakMap()) {
//     if (typeof target === 'object') {
//         const isArray = Array.isArray(target);
//         let cloneTarget = isArray ? [] : {};

//         if (map.get(target)) { // 循环引用
//             return map.get(target);
//         }
//         map.set(target, cloneTarget);
//         // 性能优化  拿到索引
//         const keys = isArray ? undefined : Object.keys(target);
//         forEach(keys || target, (value, key) => {
//             if (keys) {
//                 key = value;
//             }
//             cloneTarget[key] = clone(target[key], map);
//         });

//         return cloneTarget;
//     } else {
//         return target;
//     }
// }
