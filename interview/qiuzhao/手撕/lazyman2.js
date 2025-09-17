class LazyManClass {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        
        // 初始任务：输出名字
        this.addTask(() => {
            console.log(`I am ${this.name}`);
            this.runNext();
        });
        
        // 关键：等所有链式调用完成后，再开始执行任务队列
        Promise.resolve().then(() => this.runNext());
    }

    // 执行下一个任务
    runNext() {
        const task = this.tasks.shift();
        task && task();
    }

    // 通用添加任务的方法（简化代码）
    addTask(fn, isFirst = false) {
        isFirst ? this.tasks.unshift(fn) : this.tasks.push(fn);
        return this;
    }

    eat(food) {
        return this.addTask(() => {
            console.log(`Eat ${food}`);
            this.runNext();
        });
    }

    sleep(time) {
        return this.addTask(() => {
            setTimeout(() => {
                console.log(`Wake up after ${time}s`);
                this.runNext();
            }, time * 1000);
        });
    }

    sleepFirst(time) {
        return this.addTask(() => {
            setTimeout(() => {
                console.log(`First wake up after ${time}s`);
                this.runNext();
            }, time * 1000);
        }, true); // 标记为插入到队列最前面
    }
}

const LazyMan = (name) => new LazyManClass(name);

// 测试
LazyMan('Tony').sleep(2).sleepFirst(2).eat('lunch').eat('dinner');
