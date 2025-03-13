// 代理对象的拦截操作
// get obj,key effect -> track 添加到依赖地图
// set obj,key effect -> trigger 触发依赖地图

import { track} from "./effect.js"
const get = createGetter(); // 创建get方法
function createGetter() {
    return function get(target,key,receiver) {
        console.log('get------',target,key);
        track(target,"get",key);
        return target[key];
    }
}
export const mutableHandlers = {
    get
}