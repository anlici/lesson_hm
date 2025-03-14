// 代理对象的拦截操作
// get obj,key effect -> track 添加到依赖地图
// set obj,key effect -> trigger 触发依赖地图

import { track,trigger} from "./effect.js"

function createGetter() {
    return function get(target,key,receiver) {
        console.log('get------',target,key);
        track(target,"get",key);
        return target[key];
    }
}

function createSetter() {
    return function set(target,key,value,receiver) {
        const res = Reflect.set(target,key,value,receiver)
        trigger(target,"set",key);
        return res;
    }
}
const get = createGetter(); // 创建get方法
const set = createSetter(); 
export const mutableHandlers = {
    get,set
}