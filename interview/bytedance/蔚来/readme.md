## 计算机网络
- dns domain name system 域名解析系统 
   是域名转换成IP地址（不好记忆）的分布式数据库系统
- cn/com/net 顶级域(域提供商) 根域 .
- chrome://net-internals/#dns
- ipconfig /displaydns 显示dns缓存

- 浏览器缓存 -> 操作系统本地缓存 程序dns共享
  -> 查询本地dns 解析器（上网提供商 移动 联通） -> 
  递归查询dns 省-市
  顶级 .com .cn .net 拿到ip
  本地hosts 文件 127.0.0.1 www.baidu.com
  将域名映射到特定ip ，允许本地开发、屏蔽完整、