### deepseek
- 价格：免费
- 借助高效的分布式训练策略
- 轻量级推理：对关键参数的精准优化和筛选
- 减少使用算力，cuda 编程；
  deepseek v3 2028块 H800 557.6万美元
  相比meta llama3 是deepseek v3 的1/10
  采用了优化的 Transformer 架构

- 相比gpt4 o1 每百万 280人民币 99.6%
  openai no1 闭源
  ollama no1 开源
- 用户，模型实现优秀；经济高效

### 大前端
- 前后端包裹
  - 前端
    - react
    - mockjs
    - domain 3001 模拟数据
    
  - 后端
    - koa 
    - http 服务 3000 伺服状态
    - 路由
    resful ?
    post 表单
    - npm i koa-router(周边生态)
    - 
    代理
    api 接口数据 json 
    koa 的中间件是按照注册的顺序依次执行的，并且支持洋葱模型，即中间件在执行过程中会先进入，然后在某个点暂停，等待后续中间件执行完毕后再返回执行剩余的代码。

- ollama
  可以本地部署 ，本地访问大模型因为deepseek
  ollama pull deepseek-r1:1.5b 拉取搭配本地 offline 调用
  模型微调 自己业务
  const add = (x,y) => x+y
  transfomer机制+nlp

### 后端server配置
- 为啥不用fetch，用axios
    