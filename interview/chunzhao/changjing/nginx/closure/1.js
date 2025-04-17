function useThrottle(fn,delay=300) {
    let timer = null;
    return (...args) => {
        if(!timer) {
            fn(...args);
        }
        timer = setTimeout(() => {
            timer = null;
        },delay);
    }
}