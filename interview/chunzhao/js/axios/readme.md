- 面试官 出题原因？
  - 源码能力

- axios 基于Ajax 还是 fetch，可以手动设置？
  Ajax，**XMLHttpRequest 对象**
  axios 基于http 统一请求标准库

- ajax 和 fetch 的区别？
  - ajax 基于JavaScript 异步请求技术，XMLHttpRequest 对象
    兼容性好，支持多个多种数据格式（text xml json.parse(responseText) 
    fetch 默认是json格式）
  - fetch 现代浏览器 fetch API，基于promise 语法，语法简洁

- baseURL: 默认
  - 所有请求前缀，易于维护
    baseURL:
    process.env = 'dev'? 'https://api.github.com/':'https://api.github.com/'
  - baseURL 切换开发环境，本地和线上地址不一样
  - baseURL 配置后，请求路径：baseURL + url

- mdn， JavaScript小黄书
- 源码 js或css 
- vue rooter
- mock 数据
  