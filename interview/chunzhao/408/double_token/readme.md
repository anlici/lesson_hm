## 双token 鉴权
- jwt 
  - 服务器验证用户和密码，验证通过使用jwt 签名算法生成一个token
    这个token 包括header 头部，payload 负载和使用signature 签名进行加密
  - 客户端存储token：localStorage sessionStorage，cookie（推荐，支持httpOnly和secure属性）
  - 请求带上authorization，客户端请求时带上jwt请求头
  - 服务器验证token：解析token，验证token是否过期，是否正确，是否被篡改
  - 
    
- 单token 长时间 不安全 maxage 
- 验证access token refresh token 
  access 负责验证功能 expiresIn 短一些
  401 access_token 过期
  refresh 负责刷新 
  refresh_token  -> /api/refresh
- 无感刷新——refresh_token 更新 access_token
- sign 返回双token
  

- funtion dedp(fn,wait) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this,arguments)
        },wait)
    }
}
