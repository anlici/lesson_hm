function customSetInterval(callback,delay) {
    let running = true;
    function interval() {
        if(!running) return;
        
        setTimeout(() => {
            interval();
            callback();
        },delay)
    }
    interval();
    return () => {
        running = false;
    }
}
const  stop = customSetInterval(() => {
    console.log('hello world');
},1000);

setTimeout(stop,5000); // 5秒后停止