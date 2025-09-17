class CountController {
    constructor(maxCount = 2) {
        this.maxCount = maxCount;
        this.queue = [];
        this.runningCount = 0;
    }
    add(task) {
        return new Promise((resolve,reject) => {
            this.queue.push({
                task,
                reject,
                resolve
            })
            this._tryTask();
        })
    }
    _tryTask() {
        if(this.queue.length === 0 || this.runningCount > this.maxCount) {
            return;
        }
        const { task, reject, resolve } = this.queue.shift();
        this.runningCount++;
        Promise.resolve(task())
            .then(resolve)
            .catch(reject)
            .finally(() => {
                this.runningCount--;
                this._tryTask();
            })
    }
}

async function demo() {
  // 创建一个最大并发数为2的控制器
  const controller = new CountController(2);
  
  // 模拟一些异步任务
  const tasks = [
    () => new Promise(resolve => setTimeout(() => {
      console.log('任务1完成');
      resolve(1);
    }, 1000)),
    () => new Promise(resolve => setTimeout(() => {
      console.log('任务2完成');
      resolve(2);
    }, 800)),
    () => new Promise(resolve => setTimeout(() => {
      console.log('任务3完成');
      resolve(3);
    }, 1200)),
    () => new Promise(reject => setTimeout(() => {
      console.log('任务4完成');
      reject(4);
    }, 900))
  ];
  
  console.log('开始执行任务...');
  const startTime = Date.now();
  
  // 添加所有任务到控制器
  const promises = tasks.map((task, index) => 
    controller.add(task).then(result => {
      console.log(`任务${result}的结果已处理`);
      return result;
    })
  );
  
  // 等待所有任务完成
  const results = await Promise.all(promises);
  const endTime = Date.now();
  
  console.log('所有任务执行完成，结果:', results);
  console.log(`总耗时: ${(endTime - startTime) / 1000}秒`);
}

// 运行演示
demo();