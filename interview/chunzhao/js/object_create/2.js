// 手写new
function myNew(Constructor,...args) {
    const obj = Object.create(Constructor.prototype);
    // bind 立即执行，返回新对象
    const result = Constructor.apply(obj,args);
    return result instanceof Object ? result : obj;
}


function ObjectFactory() {
    var obj = new Object(); // 函数 创建一个空的对象
    Constructor = [].shift.call(arguments); // 获取传入的构造函数
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj,arguments);
    
    return typeof ret === 'object' ? ret||obj : obj;
}