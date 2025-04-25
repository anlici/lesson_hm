// left 要检查的对象，right 构造函数
// instanceof 检查一个对象是否是某个构造函数的实例
// 返回布尔值，引用数据类型，根据**原型链来判断**
function myInstanceof(left, right) {
    // 获取对象的原型,原型链的起点；总点是 Object.prototype
    // let proto1 = left.__proto__;
    let proto = Object.getPrototypeOf(left);
    // 获取构造函数的 prototype 对象
    let prototype = right.prototype;
    
    // 判断构造函数的 prototype 对象是否在对象的原型链上
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);

    }
}

// typeof 检查基本数据类型和函数，但是不包括null 
// 检查引用类型统一返回object，这意味着数组也是object
// 可能需要 array.isArray() 来判断是否是数组
// 检查null，返回object
