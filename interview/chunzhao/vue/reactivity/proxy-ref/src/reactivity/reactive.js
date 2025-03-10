// map es6 新增数据结构 弱引用 hashMap 
// key取value json 的key 只能是字符串，map 可以是对象
export const reactiveMap = new WeakMap(); // 
export const reactiveHandlers = {
    
}
// target: 代理的目标对象 
export const reactive = (target) => {
    // 返回代理对象
    return createReactiveObject(target,reactiveMap,reactiveHandlers)
    // return new Proxy(obj,{
    //     get(target,ket) {
    //         return target[key]
    //     },
    //     set(target,key,value) {
    //         target[key] = value
    //     }
    // })
}
// proxyMap 代理地图 proxyHandlers 代理处理函数
function createReactiveObject(target,proxyMap,proxyHandlers) {
    if (target !== 'object') {
        console.warn('target must be an object');
        return target
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy // 存在，直接返回
    }
    const proxy = new Proxy(target,proxyHandlers)
    proxyMap.set(target,proxy)
    return proxy
}