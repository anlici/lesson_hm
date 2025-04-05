// worker 线程 
// 不是普通的js 线程
// 不可以访问dom
async function check() {
    try {
      // DOM ， BOM 
      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        throw new Error('WebGPU is not supported!')
      }
    } catch(err) {
      self.postMessage({
        status: 'error',
        message: err.toString()
      });
    }
  }
  
  const load = async () => {
    self.postMessage({
      status: 'loading',
      data: 'Loading model...'
    })
  }
  
  self.onmessage = function(e) {
    // console.log(e.data);
    const { type, data } = e.data
  
    switch(type) {
      case 'check':
      check();  
      break;
      case 'load':
        load();
      break;
    }
    // self.postMessage({
    //   message: 'worker 处理完成'
    // });
  }