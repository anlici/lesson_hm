### 

- 认识url：
  url 设计模式 restful api 不用额外的参数来定位资源，直接嵌入参数到路径中
  网站用来保留资源 那怎么暴露资源呢？
  1. 约定： 约定好url的路径，约定好请求的方式，约定好返回的格式

  - http://localhost:3001/posts   列表页的链接
  - http://localhost:3001/posts/：id 定位具体到1的资源，详情页的链接
  id 查询参数

  - 访问资源方式
    - apiFOX 是啥？ web 请求代理
      修改 patch 修改部分 补丁，不是明文，put 
    - 资源 db.json users poasts
    - 请求行 ： method（post ） + path(url) + http version （http/1.1）
    - 请求头： （key:value）
      - content-type ： application/json
      - content-length ： 100
  - json-server
    - 使用json-server 来模拟后端
    - http 服务 使用db.json 数据资源向外通过http暴露出来

  - 会涉及restful api 设计模式
    - 需求
      - 新增一篇文章 ，找到url：

- 