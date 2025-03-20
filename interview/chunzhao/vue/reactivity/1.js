function reactive(obj) {
    return new Promise(obj,{
        get(target,key,receiver) {
            track(target,"get",key)
            return Reflect.get(target,key,receiver)
        },
        set(target,key,value,receiver) {
            const oldValue = target[key]
            const res = Reflect.set(target,key,value,receiver)
            if(oldValue !== value) {
                trigger(target,"set",key)
            }
            return res
        }
})}

// 订阅发表
class EventEmitter {
    constructor() {
        this.events = {}
    }
    // 订阅on
    on(event,callback) {
        if(!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback) // 订阅
    }
    // 发布
    emit(event,...args) {
        if(this.events[event]) {
            this.events[event].forEach(callback => {
                callback(...args)
            });
        }
    }
    // 取消
    off(event,callback) {
        if(this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback)
        }
    }
}
const emitter = new EventEmitter();
emitter.on('update', (newVal) => {
  console.log('Data updated to:', newVal);
});
emitter.emit('update', 5); // 输出: Data updated to: 5