## tailwindcss 与css 区别
- 

### tailwindcss 优缺点
- 缺点：打包体积大，classname类名长
  - 使用postcss 插件可以减少体积
  - 使用@apply 将多个tailwindcss 类合并成一个类

- react-Content-loader
- 渐进式：@keyframes animation 实现动画效果
- line-clamp：现在文本行数，并且通话vertical 滚动
  overflow 为hidden  ，line-clamp: 3;

## 动态调整文件分片大小和并发数量
- 检测网络速度：navigator.connection api
- getServerLoad 获取服务器负载，再动态调整分片大小和并发数量