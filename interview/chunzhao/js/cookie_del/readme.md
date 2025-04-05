## 删除cookie 
- cookie 本地存储，通过设置过期时间实现删除
  sessionStorage、localStorage 

- cookie 的属性：domain、path、expires、max-age、secure、httponly  
  domain：设置cookie的域名，默认为当前域名
  expires：过期
  max-age：过期时间，单位秒
  path：设置cookie的路径，默认为当前路径
  secure：https协议下，设置cookie只能通过https协议访问
  httponly：设置cookie只能通过http协议访问，防止xss攻击
- **SameSite**: 禁止第三方携带cookie
  - strict：不允许，严格模式
  - 防止跨站请求伪造csrf
  - lax：允许部分安全跨站（get 请求）默认值
  - none：允许所有跨站请求
- document.cookie = 'token=123;domain=www.baidu.com;path=/;max-age=3600'
