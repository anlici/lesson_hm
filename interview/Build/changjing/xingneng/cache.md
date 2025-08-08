****# 浏览器缓存实现方式

根据提供的文件内容，浏览器缓存主要分为以下几种实现方式：
- 缓存，负载减少，
-在购物商品详情和用户评论中，使用缓存，避免重复请求。采用cache-control，对内容进行哈希命名，用户二次访问，读取本地；更新时修改文件名，重新加载（200）**no-cache (适用动态接口)**
- 对商品价格接口做协商缓存。
  每次请求携带if-none-match ，数据没变更是304，变化 重新返回新数据
- 强刷
## 1. HTTP 缓存
- 为文件名添加hash 值或者版本号，如：`/static/js/app.js?v=1.0.0`

### 1.1 强缓存

强缓存允许浏览器直接从本地缓存中读取资源，不需要向服务器发送请求。

- **Expires (HTTP 1.0)**
  - 设置资源过期的绝对时间
  - 例如：`res.setHeader('Expires', new Date(Date.now() + 20000).toGMTString())`
  - 缺点：**依赖客户端时间**，可能不准确

- **Cache-Control (HTTP 1.1)**
  - 使用**相对时间**控制缓存
  - 常用指令：
    - `max-age=秒数`：资源在多少秒内有效
    - `public/private`：是否可被代理服务器缓存
      public 可以共享缓存，包括cdn缓存；private只允许浏览器缓存
    - `no-cache`：强制浏览器进行协商缓存，即每次使用缓存资源前都需要向服务器确认资源是否过期。
    - `no-store`：不缓存，每次请求都从服务器获取资源。
    - `s-maxage`：专门用于代理服务器的缓存时间，只对共享缓存如cdn的缓存有效
  - 优先级高于 Expires

### 1.2 协商缓存

当强缓存未命中时，浏览器会向服务器发送请求，通过 If-Modified-Since 和 If-None-Match 请求头询问服务器资源是否发生变化。服务器根据请求头中的信息判断资源是否过期，并返回相应的状态码和响应头。

- **Last-Modified / If-Modified-Since**
  - 服务器返回资源时响应头带上 `Last-Modified`（资源最后修改时间）
  - 浏览器下次请求时带上 请求头`If-Modified-Since`将该时间戳 发送 服务器
  - 如果资源的最后修改时间晚于 If-Modified-Since，则返回新资源。如果修改小于等于 if-modified-since,则返回 304 状态码
  - 缺点：只能精确到秒级，无法精确到毫秒级

- **ETag / If-None-Match**
  - 服务器返回资源时带上 `ETag`（资源内容的哈希值）
  - 浏览器下次请求时带上 `If-None-Match`
  - 服务器比较哈希值，如果资源未修改返回 304 状态码
  - 比 Last-Modified 更精确，优先级更高
  - 缺点：计算 ETag 可能影响服务器性能
  
- 计算ETag的方式：
  - 1. 计算文件的哈希值
  双括号包裹，强etag，弱etag（w/ 开头）
  ```js
    const crypto = require('crypto');
    const fs = require('fs');

    function getEtag(filePath) {
      const fileContent = fs.readFileSync(filePath);
      const hash = crypto.createHash('md5').update(fileContent).digest('hex');
      return `W/"${hash}";
    }
  ```
  - 2. 文件元数据:根据文件大小、修改时间等信息;这样时间不够精确，例如文件没变，但是时间变化。字符串
  ```js
    const fs = require('fs');
    
    function getMetadataEtag(filePath) {
      const stats = fs.statSync(filePath);
      
      return `${stats.size}-${stats.mtime.getTime()}`;
    }
  ```
- 强缓存高于协商缓存
- 强制刷新的例外： 用户主动触发硬刷新（如 Ctrl+F5）时，浏览器会忽略强缓存，强制向服务器发起请求

## 2. 浏览器本地存储

### 2.1 Cookie

- 通过设置 `document.cookie` 存储数据
- 属性：domain、path、expires、max-age、secure、httpOnly、SameSite
- 每次请求自动携带，适合存储小量数据
- 示例：`document.cookie = 'token=123;max-age=3600;path=/'`

### 2.2 localStorage

- 永久存储，除非手动清除
- 存储容量较大（约 5MB）
- 适合存储 token 等长期有效的数据
- 示例：`localStorage.setItem('token', 'xxx')`
- 安全：
  - crypto 加密
  - 密码账号等录等敏感信息，放到cookie中
  - 定期清除

### 2.3 sessionStorage

- 会话级存储，关闭页面后清除
- 存储容量与 localStorage 相同
- 适合存储临时数据

### 2.4 IndexedDB

- 大容量存储，存储结构化数据
- **支持离线存储、离线更新、离线推送**
- 适合存储大量数据

## 3. **Service Worker**
- service worker 是一种*独立运行在浏览器后台的线程*，用于进行**拦截网络请求和管理缓存**。
- - 监听 fetch 事件，拦截请求，使用 caches 匹配响应
- 而在监听 install 事件时下载资源到本地，实现离线访问
- 推送消息：先放旧数据，再发送请求，再放新数据（不卡）

- 监听 activate 事件，对 cache 里的资源进行过滤，更新缓存
  activate 会清理旧资源*（所有为异步）*
- 实现离线缓存、离线访问、离线更新、离线推送

- PWA（渐进式 Web 应用）的离线访问

## 4. **缓存优化策略**

- 静态资源使用 CDN 加速
- DNS 预解析：`<link rel="dns-prefetch" href="域名">` 提前解析dns，后面浏览器加载这个域名，直接使用已经解析好的ip地址
  但是dns 预解析会增加请求时间，所以需要根据实际情况选择；
  - 预连接 ( preconnect ) ：除了 DNS 解析外，还会建立 TCP 连接和 TLS 握手
    ```html
    <link rel="preconnect" href="https://cdn.example.com">
    ```
    ```
    - **预加载 ( preload )** ：实际加载特定资源，如 JS、CSS、字体等

    ```html
    <link rel="preload" href="https://cdn.example.com/style.css" as="style">
    <link rel="preload" href="https://cdn.example.com/main.js" as="script">
    ```
    ```
    - 预获取 ( prefetch ) ：在浏览器空闲时预先加载将来可能需要的资源

- 图片懒加载：使用 IntersectionObserver 或 getBoundingClientRect
- 合理设置缓存策略，频繁变动的资源（html ，生成的json）使用协商缓存，不常变动的资源（静态资源 css、图片）使用强缓存

## redis 组件缓存
- 缓存雪崩：缓存数据同时失效，导致缓存击穿，请求量瞬间增加，导致服务崩溃。
  - 过期时间，不同
  - 有个备份
- 缓存击穿：缓存失效，并发过多，负载过
  - 分布式锁，并发访问同一数据，只允许一个请求访问，其他请求等待
  - 互斥锁，一个访问完，在其他
- 缓存穿透：缓存数据不存在，每次请求。
  - 将部分可能频繁访问的数据写入缓存
  - 布隆过滤器，过滤掉不存在的数据

