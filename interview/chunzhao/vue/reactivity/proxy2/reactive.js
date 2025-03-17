import {
    mutableHandlers,
    shallowHandlers
} from './baseHandlers'
export const reactiveMap = new WeakMap(); // 全局依赖地图
export const shallowReactiveMap = new WeakMap(); // 浅依赖

// target: 代理的目标对象 
export const reactive = (target) => {
    // 返回代理对象
    return createReactiveObject(target,reactiveMap,mutableHandlers)
}

export const shallowReactive = (target) => {
    return createReactiveObject(target,shallowReactiveMap,shallowHandlers)
}

// proxyMap 代理地图 proxyHandlers 代理处理函数
function createReactiveObject(target,proxyMap,proxyHandlers) {
    if (typeof target !== 'object') {
        console.warn('target must be an object');
        return target
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
    // 该对象是否已经被代理过(已经是响应式对象)
        return existingProxy 
    }
    
    // 执行代理操作（将target处理成响应式）
    const proxy = new Proxy(target,proxyHandlers)
    
    // 往 proxyMap 增加 proxy, 把已经代理过的对象缓存起来
    proxyMap.set(target,proxy)
    
    return proxy
}