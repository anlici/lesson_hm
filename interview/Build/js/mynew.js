function myNew(constructor, ...args) {
    // 1. 创建一个新对象，该对象的原型指向构造函数的prototype
    const obj = Object.create(constructor.prototype);
    
    // 2. 执行构造函数，并将this指向新创建的对象
    const result = constructor.apply(obj, args);
    
    // 3. 如果构造函数返回一个对象，则返回该对象；否则返回新创建的对象
    return (typeof result === 'object' && result !== null) ? result : obj;
}

