// es6 代理对象
const proxy = new Proxy({},{
    // get 访问拦截，set 修改拦截
    get: function(obj,prop) {
        console.log(`get访问${prop}`);
        return obj[prop]
    },  
    set: function(obj,prop,value) {
        console.log(`set修改${prop}`);
        obj[prop] = value
    }
})

proxy.name = '123';

proxy.name = '456';// set修改name

// console.log(name);
console.log(proxy.name);