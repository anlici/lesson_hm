// 并发Promise
// 给定一个数n如23121，给定一组数字a如[2 4 9]，求由a中元素组成的小于n的最大数如22999
// LRU + 超过x s也需要清除没有get/set的缓存：思路是get时清除，保障行为上的正确

// 并发控制器，入参为最大并发，需满足最大并发2
// 最多发放 2 个 "执行令牌"，只有当令牌被释放（任务完成），新的令牌才会被分配给等待队列中的任务
class CountController {
    constructor(maxCount = 2) {
        this.maxCount = maxCount;
        this.runningCount = 0; // 正在运行
        this.queue = [];
    }
    add(task) {
        return new Promise((resolve,reject) => {
            this.queue.push({
                task,
                resolve,
                reject
            })
            this._tryTask();
        })
    }
    _tryTask() {
        if(this.runningCount >= this.maxCount || this.queue.length === 0) {
            return;
        }
        const { task, reject, resolve } = this.queue.shift();
        this.runningCount ++;
        Promise.resolve(task()) 
            .then(resolve)
            .catch(reject)
            .finally(() => {
                this.runningCount--;
                this._tryTask(); // 执行下一个
            })
    }
}

