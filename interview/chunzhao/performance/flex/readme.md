一、性能优化篇

Flex布局性能指标计算方案 测量方式：
javascript
// 总渲染时间测量
const start = performance.now();
window.addEventListener('load', () => {
  const totalTime = performance.now() - start;
});

// 首元素渲染时间
const observer = new PerformanceObserver(list => {
  const entries = list.getEntries();
  const fpEntry = entries.find(e => e.name === 'first-paint');
  const fcpEntry = entries.find(e => e.name === 'first-contentful-paint');
});
observer.observe({ entryTypes: ['paint'] });
关键渲染流程解释： DOM Tree → CSSOM → Render Tree → Layout → Paint → Composite （结合图层合成机制解释z-index/transform的优化原理）

## 二、异步编程篇

- setTimeout模拟setInterval的三大缺陷
时间漂移问题：回调执行时间包含代码执行时间，导致间隔不准确
任务堆积风险：当主线程阻塞时会导致回调堆积
渲染阻塞：长时间运行会影响帧渲染（60fps≈16.67ms/帧）


Promise并发控制标准实现
javascript
function concurrentPool(tasks, limit) {
  const results = [];
  const executing = new Set();
  
  return new Promise(resolve => {
    tasks.forEach(task => {
      const p = Promise.resolve().then(() => task());
      executing.add(p);
      
      p.finally(() => {
        executing.delete(p);
        if (executing.size === 0 && results.length === tasks.length) {
          resolve(results);
        }
      });
      
      if (executing.size >= limit) {
        Promise.race(executing).then(() => {});
      }
    });
  });
}
三、Promise手写实现篇

规范的Promise.allSettled实现
javascript
function allSettled(promises) {
  return Promise.all(promises.map(p => 
    p.then(value => ({ status: 'fulfilled', value }))
     .catch(reason => ({ status: 'rejected', reason }))
  ));
}
与官方实现的差异点：

需要处理非Promise值
需要保持结果顺序一致性