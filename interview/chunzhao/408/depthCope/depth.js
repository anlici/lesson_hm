function deepClone(obj,hash = new WeakMap()) {
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }
    
    if(hash.has(obj)) {
        return hash.get(obj);
    }
    if(obj instanceof Date) {
        return new Date(obj);
    } else if(obj instanceof RegExp) {
        return new RegExp(obj);
    } else if(obj instanceof Function) {
        return new Function(obj);
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
// 测试循环引用
const obj = { a: 1 };
obj.self = obj;

// 测试特殊类型
const testObj = {
    date: new Date(),
    regex: /pattern/g,
    fn: function() { console.log('hello') },
    arr: [new Date()]
};

const cloned = deepClone(testObj);
console.log(cloned.date.getTime() === testObj.date.getTime()); // true
console.log(cloned.regex.source === testObj.regex.source); // true
console.log(cloned.fn === testObj.fn); // true

