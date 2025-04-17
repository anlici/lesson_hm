function xhrRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method || 'GET', url, true); // 执行异步
  
      // 设置请求头
      if (options.headers) {
        for (let key in options.headers) {
          xhr.setRequestHeader(key, options.headers[key]);
        }
      }
  
      xhr.onreadystatechange = function() { // 监听 readyState 状态变化 
        if (xhr.readyState === 4) { // 请求完成
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            reject(new Error(xhr.status));
          }
        }
      };
  
      xhr.onerror = function() {
        reject(new Error('Network Error'));
      };
  
      xhr.send(options.body || null);// 发送，null 为get
    });
  }
  
  // 使用示例
  xhrRequest('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(err => console.error(err));