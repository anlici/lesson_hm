// 代理对象的拦截操作
// get obj,key effect -> track 添加到依赖地图
// set obj,key effect -> trigger 触发依赖地图

import { track,trigger} from "./effect.js"
import {reactive} from "./reactive.js"
import { isObject } from "../shared/index.js";
// 收集 shallow 浅显 
function createGetter(shallow = false) {

    // {a:1,b:2,c:{d:{e:1,f:2}} 递归
    return function get(target,key,receiver) {
        console.log('get------',target,key);
        track(target,"get",key);
        let res = target[key];

        // 如果是响应式对象，就代理
        if(isObject(res)) {
            return shallow ? res : reactive(res); // 深代理
        }
        return res;
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
    get,
    set
}

const shallowReactiveGet = createGetter(true)
export const shallowReactiveHandlers = {
    get:shallowReactiveGet,
    set
}