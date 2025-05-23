Function.prototype.mybind = function(context,...args) {
    const fn = this;
    const boundFn =  function(...args2) {
        return fn.call(context,...args,...args2);
    }

    boundFn.prototype = Object.create(fn.prototype);
    return boundFn;
}

function myNew(fn,...args) {
    const obj = Object.create(fn.prototype);
    const res = fn.apply(obj,args); // 执行构造函数，修改this指向

    return res instanceof Object ? res : obj;
}