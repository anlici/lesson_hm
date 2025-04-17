# 浏览器缓存实现方式

根据提供的文件内容，浏览器缓存主要分为以下几种实现方式：

## 1. HTTP 缓存

### 1.1 强缓存

强缓存允许浏览器直接从本地缓存中读取资源，不需要向服务器发送请求。

- **Expires (HTTP 1.0)**
  - 设置资源过期的绝对时间
  - 例如：`res.setHeader('Expires', new Date(Date.now() + 20000).toGMTString())`
  - 缺点：依赖客户端时间，可能不准确

- **Cache-Control (HTTP 1.1)**
  - 使用相对时间控制缓存
  - 常用指令：
    - `max-age=秒数`：资源在多少秒内有效
    - `public/private`：是否可被代理服务器缓存
    - `no-cache`：强制验证缓存
    - `s-maxage`：专门用于代理服务器的缓存时间
  - 优先级高于 Expires

### 1.2 协商缓存

当强缓存失效后，浏览器会发送请求到服务器，验证资源是否有更新。

- **Last-Modified / If-Modified-Since**
  - 服务器返回资源时带上 `Last-Modified`（资源最后修改时间）
  - 浏览器下次请求时带上 `If-Modified-Since`
  - 服务器比较时间，如果资源未修改返回 304 状态码

- **ETag / If-None-Match**
  - 服务器返回资源时带上 `ETag`（资源内容的哈希值）
  - 浏览器下次请求时带上 `If-None-Match`
  - 服务器比较哈希值，如果资源未修改返回 304 状态码
  - 比 Last-Modified 更精确，优先级更高
  - 缺点：计算 ETag 可能影响服务器性能

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

### 2.3 sessionStorage

- 会话级存储，关闭页面后清除
- 存储容量与 localStorage 相同
- 适合存储临时数据

### 2.4 IndexedDB

- 大容量存储，存储结构化数据
- 支持离线存储、离线更新、离线推送
- 适合存储大量数据

## 3. Service Worker

- 拦截网络请求，使用 caches 匹配响应
- 在监听 install 事件时下载资源到本地，实现离线访问
- 监听 activate 事件，对 cache 里的资源进行过滤，更新缓存
- 实现离线缓存、离线访问、离线更新、离线推送

## 4. 缓存优化策略

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
- 合理设置缓存策略，频繁变动的资源使用协商缓存，不常变动的资源使用强缓存

浏览器缓存机制是前端性能优化的重要手段，合理利用各种缓存策略可以显著提升网站加载速度和用户体验。