class Observer {
    constructor(name) {
        this.name = name; 
    }
    update(message) {
        console.log(`${this.name} received message: ${message}`);

    }
    getName() {
        return this.name;
    }
}
class Subject {
   
    constructor() {
        this.observers = []; // 观察者列表 
    }
    addObserver(observer) { // 添加观察者
        this.observers.push(observer);
    }
    notify(task) {
        this.observers.forEach(observer => { // 通知所有观察者
            observer.update(task); // 调用观察者的update方法
        })
    }
}

// 使用示例
const subject = new Subject(); // 创建主题
const observer1 = new Observer('Observer 1'); // 创建观察者1
const observer2 = new Observer('Observer 2'); // 创建观察者2
subject.addObserver(observer1); // 添加观察者1
subject.addObserver(observer2); // 添加观察者2
subject.notify('New task assigned'); // 通知所有观察者