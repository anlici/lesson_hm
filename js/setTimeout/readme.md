### 定时器
   - JS 只要一个主线程
   - setTimeout 是异步执行计时器，在主线程执行完后才执行
     callback 是同步执行的
   - 问：一定在指定时间后执行吗？
     不一定，因为主线程执行的时间过长，导致 callback 执行的时间早于指定时间
   
   - 执行回调函数 ，定时器id

  - 如何使用 setTimeout 实现 setInterval？
    场景题，手写
     - customInterval 
     - callback ， t参数
     - 可以用setTimeout 实现
     - 递归