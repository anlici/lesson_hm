## 用户登录的状态管理，详细讲一下；
- 认证方式：
    JWT（主流）：服务端签发包含用户信息的Token（分access_token短期有效 + refresh_token长期刷新）。
    Session-Cookie（传统）：服务端存储Session，通过Cookie的HttpOnly标志防XSS。
    OAuth/SSO（第三方登录）：如微信/Google登录，**依赖授权码模式**。

- 自动刷新Token：
    **双Token过期则强制重新登录。**
    发起请求时校验access_token过期 → 用refresh_token静默获取新Token（需HTTPS防劫持）。
- 回答示例
    “用户登录状态管理的核心是平衡安全性与用户体验。以JWT为例，前端收到Token后建议存HttpOnly Cookie防XSS，若存localStorage则需严格消毒输入防XSS。Token过期时通过refresh_token无感刷新，并配合请求拦截自动重试。多技术栈主要差异在服务端签发/校验逻辑，如Node用jsonwebtoken，Java用Spring Security。安全上需关注CSRF防护、短有效期和敏感操作二次验证。”