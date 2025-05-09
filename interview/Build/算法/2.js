function singleFlight(fn) {
    let currentPromise = Promise.resolve();
    return function (...args) {
        currentPromise = currentPromise.then(() => fn(...args));
        return currentPromise;
    };
}
function request(num) {
    console.log(`开始:${num}`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`完成:${num}`);
            resolve(`结果:${num}`);
        }, 1000 * (4 - num));
    });
}

const f = singleFlight(request);
Promise.all([f(1), f(2), f(3)]).then((results) => {
    console.log(results);
});