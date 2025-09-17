class Middleware {
  constructor() {
    this.middlewares = [];
  }
  use(fn) {
    this.middlewares.push(fn);
  }
  compose() {
    const middlewares = this.middlewares;
    return function (ctx) {
      let index = -1;
      function dispatch(i) {
        // 重复调用，await next（） 多次
        if(i<=index) return Promise.reject(new Error('next() called multiple times'));
        index = i;
        let fn = middlewares[i];
        if(!fn) return Promise.resolve(); // 执行结束
        try {
            return Promise.resolve(fn(ctx,() => dispatch(i+1)));
        } catch (e) {
            return Promise.reject(e);
        }
      }
      return dispatch(0);
    };
  }
}