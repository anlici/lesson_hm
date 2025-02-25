// 使用vant-swipe 内置lazy-render 属性一样效果，
// 只渲染当前可见item 如果背景图，直接全部加载合适
const lazyLoad = {
    // mounted 在绑定元素的父组件 
    // 及他自己的所有子节点都挂载完成后调用
    mounted(el:any, binding:any) {
      // 如果有需要可以先设置src为 loading 图 
      // el.setAttribute('src', 'loading 图的路径');
      const options = {
        rootMargin: '0px',
        threshold: 0.1,
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // binding 是一个对象，binding.value 是传递给指令的值
            el.setAttribute('src', binding.value);
            observer.unobserve(el);
          }
        });
      }, options);
      observer.observe(el);
    },
  };
  
  export default lazyLoad;
  