// 事件监听器

class eventEmitter {
    constructor() {
        this.event = {}
    }
    on(key,fn) {
        if(!this.event[key])  this.event[key] = [];
        this.event[key].push({ fn, once: false })
    }
    once(key,fn) {
        if(!this.event[key])  this.event[key] = [];
        this.event[key].push({ fn, once: true })
    }
    emit(key,...args) {
        if(!this.event[key]) return;
        const listener = [...this.event[key]];
        const toRemove = [];
        listener.forEach((item,index) => {
            item.fn(...args); // 执行回调
            if(item.once) {
                toRemove.push(index);
            }
        })
        // 后向前
        toRemove.reverse().forEach(index => {
            this.event[key].splice(index,1);
        })
    }
    off(key,fn) {
        if(!this.event[key]) return;
        this.event[key] = this.event[key].filter(
            item => item.fn !== fn
        )
    }
}

const emitter = new eventEmitter();

// 测试 on 方法（持久事件）
function log(msg) {
  console.log('持久事件:', msg);
}
emitter.on('test', log);
emitter.emit('test', '第一次'); // 输出: 持久事件: 第一次
emitter.emit('test', '第二次'); // 输出: 持久事件: 第二次

// 测试 once 方法（一次性事件）
emitter.once('onceEvent', (num) => {
  console.log('一次性事件:', num * 2);
});
emitter.emit('onceEvent', 10); // 输出: 一次性事件: 20
emitter.emit('onceEvent', 20); // 无输出（已被移除）

// 测试 off 方法（移除事件）
emitter.off('test', log);
emitter.emit('test', '第三次'); // 无输出（已被移除）

/**
 * 有prority 优先级
 * group 分组
 */
// class eventEmitter {
//     constructor() {
//         this.event = {}
//     }
//     on(key, fn, options = {}) {
//         if(!this.event[key])  // 不存在即初始化
//             this.event[key] = [];
//         const { once = false, group = null, priority = 0 } = options;
//         const listener = { fn, once, group, priority };
//         this.event[key].push(listener);
//         this.event[key].sort((a,b) => a.priority - b.priority);
//     }
//     emit(key,...args) {
//         if(!this.event[key]) return false; // 没有没法触发
//         // 复制并且按顺序执行 可提供一次性移除 toRemove 数组
//         const listeners = this.event[key].slice();
//         const toRemove = [];
//         listeners.forEach((listener,key) => {
//             try {
//                 listener.fn(...args);
//                 if(listener.once) { // 标记一次监听器待移除
//                     toRemove.push(index)
//                 }
//             } catch (err) {
//                 console.log(err);
//             }
//         })
//         toRemove.reverse().forEach(index => {
//             this.event[key].splice(index,1);
//         })
//     }
//     once(key,fn,options = {}) {
//         return this.on(key,fn,{...options, once: true })
//     }
//     off(key, fn) {
//         if(!this.event[key]) return false;

//         const index = this.event[key].findIndex(listener => {
//             listener.fn === fn || listener.fn.callback === fn
//         })

//         if(index !== -1) {
//             this.event[key].splice(index,1);
//         }
//         return this;
//     }
// }