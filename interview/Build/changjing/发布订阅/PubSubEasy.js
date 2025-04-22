class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName,fn) {
        if(!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(fn);
    }
    emit(eventName,...args) {
        const fns = this.events[eventName];
        // 所有的函数都执行
        fns.forEach(fn => fn(...args))
    }
    off(eventName,fn) {
        // 从指定事件移除自己的函数
        const fns = this.events[eventName];
        if(fns) {
           this.events[eventName] = fns.filter(item => item !== fn);
        }
    }
}

const emitter = new EventEmitter();


// 订阅事件
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// 发布事件
emitter.emit('greet', 'John'); 

// 取消订阅
emitter.off('greet', (name) => {
    console.log(`Hello, ${name}!`);
});