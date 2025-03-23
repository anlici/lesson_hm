// 模拟 Object.create
Object.create = function (proto,propertyObject=undefined) { // proto 原型对象，
    if(typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object or null'+ proto);
    }
    if(propertyObject === null) {
        throw new Error('Cannot convert undefined or null to object'+propertyObject);
    }
    function F() {}
    F.prototype = proto;
    const obj = new F();

    if(propertyObject !== undefined) {
        // 定义各种属性
        Object.defineProperties(obj,propertyObject); // 添加属性
    }
    if(proto === null) {
        obj.__proto__ = null;
    }
    return obj;
}