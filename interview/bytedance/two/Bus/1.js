// class slove 
class EventEmitter {
    constructor() {
        this.cache = {};
    }
    on(name,fn) {
        // event subscription
        if(!this.cache[name]) { 
            this.cache[name] = [];
        }
        // add fn to cache
        this.cache[name].push(fn);
    }
    emit(name,...args) {
        // publish 
        if(this.cache[name]) {
            // cope to new
            let tasks = this.cache[name].slice();
            // to every fn of args
            for(let fn of tasks) {
                fn(...args); 
            } 
        }
    }
    off(name,fn) {
        let tasks = this.cache[name] || []
        const index = tasks.findIndex(item => item === fn) 
        if(index > -1) {
            tasks.splice(index,1); // delete
        }
    }
}
const fn1  = () => {
    console.log('this is fn1');
}
const fn2  = () => {
    console.log('this is fn2');
}
let eventBus = new EventEmitter(); // create eventBus
eventBus.on('click',fn1) // 
eventBus.on('click',fn2)
eventBus.emit('click','jack',25)

eventBus.off('click',fn1)
eventBus.emit('click','roce',20)
