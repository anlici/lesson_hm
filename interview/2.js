function deepClone(obj) {
    // 判断是否对象
    if(obj === 'null' || typeof obj !== 'object') return obj;

    const newObj = obj instanceof Array ? [] : {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}

function deepClone(obj) {
    
    // 字符串
    return JSON.parse(JSON.stringify(obj))
}
// deepClone 本身方法
