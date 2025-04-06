
export default {
    mounted(el,bindings,vnode) {
        console.log(el,bindings,vnode)
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const img = new Image();
                    img.src = bindings.value // 设置src 

                    img.onload = () => {
                        el.src = img.src; // 设置图片的src
                        el.classList.add('loaded'); // 添加加载完的样式
                    };
                    img.onerror = () => {
                        el.src = '/images/error.png'; // 加载失败时显示默认图片
                    };
                    observer.unobserve(el);
            }
        })      
    })
        el._lazy_observer = observer; // 将observer存储在元素上
        observer.observe(el); // 监听el
    },
    beforeUnmount(el) { // 组件卸载前 取消监听，清理el._lazy_observer
        if (el._lazy_observer) {
            el._lazy_observer.unobserve(el)
            delete el._lazy_observer;
        }
    }
}