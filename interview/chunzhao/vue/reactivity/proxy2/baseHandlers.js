// baseHandlers.js
import { track, trigger } from "./effect";

// 创建可配置的getter生成器
function createGetter(shallow = false) {
  return function get(target, key, receiver) {
    console.log(`拦截【读取】操作：${String(key)}`);
    
    // 反射API保证this正确性
    const res = Reflect.get(target, key, receiver);
    
    // 依赖收集（记录当前属性被哪些effect使用）
    track(target, "get", key);
    
    // 递归代理：当值为对象时继续代理
    if (isObject(res) && !shallow) {
      return reactive(res);
    }
    
    return res;
  };
}

// 创建setter生成器
function createSetter() {
  return function set(target, key, value, receiver) {
    console.log(`拦截【写入】操作：${String(key)}=${value}`);
    
    const oldValue = target[key];
    const success = Reflect.set(target, key, value, receiver);
    
    // 只有值变化时才触发更新（性能优化）
    if (success && oldValue !== value) {
      trigger(target, "set", key);
    }
    
    return success;
  };
}

// 导出标准处理器
export const mutableHandlers = {
  get: createGetter(),
  set: createSetter()
};