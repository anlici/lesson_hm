// effect.js
let activeEffect = null; // 当前正在收集的副作用函数
const targetMap = new WeakMap(); // 全局依赖存储中心

export function effect(fn, options = {}) {
  console.log('注册副作用函数:', fn.name || '匿名函数');
  
  const effectFn = () => {
    try {
      // 设置为当前活跃effect
      activeEffect = effectFn;
      // 执行函数触发依赖收集
      return fn();
    } finally {
      // 执行完成后重置
      activeEffect = null;
    }
  };
  
  // 立即执行一次（除非配置lazy）
  if (!options.lazy) {
    effectFn();
  }
  
  return effectFn;
}

// track函数：记录依赖关系
export function track(target, type, key) {
    if (!activeEffect) return;
    
    console.log(`收集依赖：${target}的${String(key)}属性`);
  
    // 三级依赖结构查询
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()));
    }
  
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }
  
    // 避免重复添加
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      console.log(`新增依赖：当前共有${dep.size}个依赖`);
    }
  }
  
  // trigger函数：触发更新
  export function trigger(target, type, key) {
    console.log(`触发更新：${target}的${String(key)}属性变更`);
  
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
  
    const dep = depsMap.get(key);
    if (dep) {
      // 创建副本避免无限循环
      const effects = new Set(dep);
      effects.forEach(effect => {
        console.log('执行副作用函数:', effect.name || '匿名函数');
        effect();
      });
    }
  }