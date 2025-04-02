function measureRenderTime() {
    // 性能优化api 
    const startTime = performance.now();
    const firstElement = document.querySelector('.flex-item');
    const checkFirstRendered = setInterval(() => {
        if (firstElement.offsetHeight && firstElement.offsetWidth) {
            clearInterval(checkFirstRendered);
            const endTime = performance.now();
            console.log(`渲染时间：${endTime - startTime}ms`);
        }
    }, 100);
}
measureRenderTime();