let activeEffect = null; // 当前effect 
let targetMap = new WeakMap(); // 存储所有响应式对象

// 注册一个响应式副作用函数fn，立即执行并且返回自身
export function effect(fn) {
    // 立即执行一次 返回函数 
    console.log(fn,'......///');
    // 赋值全局activeEffect
    const effectFn = () => {
        try{
            activeEffect = effectFn
            return fn() // 搜集依赖
        } catch (e) {
            console.log('effectFn error',e);
        }
    }
    effectFn()
    return effectFn 
}
// 依赖收集
export function track(target,type,key) {
    console.log('触发track -> target:type(get |{{}} | onMounted)',target,type,key);

    let depsMap = targetMap.get(target); // 收集依赖
    if (!depsMap) {
        // 没有depsMap 创建一个Map
        targetMap.set(target,depsMap = new Map())
    }

    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }
  
    dep.add(activeEffect); // 将当前副作用函数添加到依赖集合中
}
// 依赖触发
export function trigger(target,type,key) {
    console.log('触发trigger -> target:type(get |{{}} | onMounted)',target,type,key);
    const depsMap = targetMap.get(target);
    if (!depsMap) return;

    const dep = depsMap.get(key);
    if(dep) {
        dep.forEach(effectFn => {
            effectFn(); // 触发所有副作用函数
        });
    }
    
}