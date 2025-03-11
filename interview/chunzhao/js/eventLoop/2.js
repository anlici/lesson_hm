console.log('1');
setTimeout(() => {
    console.log('2');
    Promise.resolve().then(() => {
        console.log('4');
    });
    process.nextTick(() => {
        console.log('3');
    });
});
Promise.resolve().then(() => {
    console.log('5');
});
setTimeout(() => {
    console.log('7');
});
setImmediate(() => {
    console.log('9');
});
console.log('6');