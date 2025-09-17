// setTimeout 实现 setInterval，并且能够flag 控制停止
function myInterval(fn,time) {
    let timer = {flag:true};
    function interval() {
        if(timer.flag) {
            fn();
            setTimeout(interval,time);
        } 
    }
    interval();
    return timer;
}

const timer = myInterval(() => {
    console.log('interval');
},1000);
setTimeout(() => {
    timer.flag = false;
},5000);