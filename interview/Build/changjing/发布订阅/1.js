class fabu {
    constructor() {
        this.eventMap = new Map(); // 
        this.onceMap = new WeakMap(); // 一次性事件后可以清除
    }
    on(eventName,fn){
        if(typeof fn !== 'function') {
            throw new Error('fn 必须是函数');
        }
        const fns = this.eventMap.get(eventName) || [];
        fns.push(fn); // 添加事件
        this.eventMap.set(eventName,fns); 
    }
    emit(eventName,...args) {
            const fns = this.eventMap.get(eventName);
            if(!fns) return false; // 没有事件

            // slice 是浅拷贝，创建副本，不影响原数组
            fns.slice().forEach(fn => {
                Promise.resolve().then(() =>{
                    fn.apply(this,args);
                })
            })
            return true;
    }

    off(eventName,fn) {
        const fns = this.eventMap.get(eventName);
        if(!fns) return false; // 没有事件

    
        if(fn.length === 0) {
            this.eventMap.delete(eventName); // 清空
        } else {
            const index = fns.indexOf(fn); // 找到索引
            if(index !== -1) { // 有
                fns.splice(index,1); // 移除
        }}
    }
    
    // 一次触发
    once(eventName,fn)  {
        const onceFn = (...args) => { // 执行一次
            fn.apply(this,args); // 执行
            this.off(eventName,onceFn); // 移除
        }
        this.on(eventName,onceFn); // 注册
        this.onceMap.set(fn,onceFn); // 存储
    }

}