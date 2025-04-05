// 不能共享主线程上下文，不能访问dom -> 证明单线程
self.onmessage = function (e) {
    console.log(e.data);
    self.postMessage({
        message: 'worker 处理完成'
    });
}