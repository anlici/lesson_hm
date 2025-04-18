## 用户登录的状态管理，详细讲一下；
认证方式：

JWT（主流）：服务端签发包含用户信息的Token（分access_token短期有效 + refresh_token长期刷新）。

Session-Cookie（传统）：服务端存储Session，通过Cookie的HttpOnly标志防XSS。

OAuth/SSO（第三方登录）：如微信/Google登录，依赖授权码模式。

客户端存储：

JWT存储位置：

localStorage：易受XSS攻击，但需手动处理（适合SPA）。

HttpOnly Cookie：防XSS但需防范CSRF（配合SameSite/Token验证）。

敏感数据：避免存储密码/原始Token，可用memory临时存储。

持久化与刷新：

自动刷新Token：

发起请求时校验access_token过期 → 用refresh_token静默获取新Token（需HTTPS防劫持）。

双Token过期则强制重新登录。

协商缓存：通常指HTTP缓存策略（如304 Not Modified），与登录态无关，此处可能是面试官笔误。

2. 安全防护措施
JWT风险应对：

签名算法防篡改（如HS256/RS256）。

短有效期 + 黑名单（针对注销场景）。

Cookie防护：

Secure（仅HTTPS）、SameSite=Lax/Strict防CSRF。

补充手段：

关键操作二次验证（短信/指纹）。

异地登录检测（IP/设备指纹）。

3. 多技术栈实现差异
前端框架：

React/Vue：用Context/Redux/Pinia管理状态，拦截axios/fetch请求注入Token。

原生JS：手动监听Storage事件同步多标签页状态。

服务端差异：

Node.js：jsonwebtoken库签发，中间件校验。

Java：Spring Security + JWT Filter。

PHP：Laravel Passport/Sanctum。

4. 高级场景扩展（加分项）
无感刷新：

在响应拦截器中捕获401错误 → 调用刷新接口 → 重发原请求。

分布式系统：

JWT天然无状态，Session需共享存储（Redis集群）。

SSR兼容：

Next.js/Nuxt.js需区分服务端（Cookie）和客户端（localStorage）存储。

回答示例
“用户登录状态管理的核心是平衡安全性与用户体验。以JWT为例，前端收到Token后建议存HttpOnly Cookie防XSS，若存localStorage则需严格消毒输入防XSS。Token过期时通过refresh_token无感刷新，并配合请求拦截自动重试。多技术栈主要差异在服务端签发/校验逻辑，如Node用jsonwebtoken，Java用Spring Security。安全上需关注CSRF防护、短有效期和敏感操作二次验证。”