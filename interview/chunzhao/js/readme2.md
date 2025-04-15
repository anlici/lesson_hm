## 首页资源压缩、白屏时间
- 路由懒加载：优化首屏加载速度，
  懒加载模块，单独模块打包，拆分成appjs和homejs，其他打包成一个模块
  当路由切换，使用es6动态加载模块——import机制，
  并且第一次

- require 静态加载，import 区别：import 静态分析：模块在代码解析阶段被加载。运行后require，一般在nodejs。检索import 不用运行时候才知道内容。
  - 代码分离：懒加载子模块分离，
  - vue、pinia 测试，push 到服务器，不会进行分离？自动实现模块按需加载
    vue=-router 不会code split
- 组件懒加载：
  - home 页面，about 页面，
  - 登入弹窗组件，首页一开始可以不用。v-if
  - 深拷贝
- 
- tree-shaking：
  - 依赖es6 模块，es6 模块依赖关系，和运行状态无关，进行可靠静态分析
- 入口文件，use引入，依赖关系
- export default 同时导出两个模块，
- suspense + loading 懒加载组件，
- 骨架屏不一样，列表，详情页，
function deep(obj) {
    if(obj == null || typeof obj !== 'object')  return obj;
    let newObj = Array.isArray(obj) ? [] : {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = deep(obj[key])
        }
    }
    return newObj;
}
- 白屏时间86%，vue-skeleton-webpack-plugin 插件，
- 虚拟列表，overflow-y:scoll 子超父
- 刷新桢和延迟时间不匹配，视觉
  event loop 回调被延迟，
  @keyframes 浏览器渲染，
  使用transform 和 opacity 
- react fiber ：react-site- callBack
- setInterval 使用js 引擎，requestAnimationFrame GUI渲染（gpu）
- 图片进行裁剪，在图片地址后面加上宽高，云服务
  http://7xkv1q.com1.z0.glb.clouddn.com/grape.jpg?imageView2/1/w/200/h/200 
  cropperjs 支持缩放、旋转、
- 字体图标是页面使用小图标的不二选择，最常用的就是 iconfont
- 有些背景图 
- google 图片base64 
  - 包含文件头信息，
  - 编码，
  - 简单图片，小一点的，减少并发，
  - gzip 压缩，变成webp 格式，减少请求，减少流量，
  - 背景使用阴影
- 观察者模式，订阅发布者模式
- 工程化，单例模式