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

## react 的fiber
- 解决一些性能问题，并且通过一些新功能
- 传统架构，递归创建虚拟dom；递归如果层级树很深，会消耗大量内存，
- 因为js 为单线程，UI渲染线程，导致用户觉得卡顿
- fiber 有两个：一个动态优先级，一个是可中断渲染。
  - 先执行优先级，解决传统优先级都是同优先级的问题
  - 可中断渲染，解决用户卡顿问题，
  - 任务是分帧执行，如果执行时间超过当前桢剩余时间，
    - 会将优先级交给其他渲染

## react 引入hooks 
- 类组件复用状态逻辑
  - 使用高级组件，如果多层嵌套，导致代码地狱
  - redux 很多代码都在使用，但是使用store可以，但是很麻烦；
- 复杂组件逻辑难以理解
  - 功能进行划分，
  - 将生命周期不会有太多相同而且不相关的逻辑代码，减少bug
- 减少class 类组件写法，
  - this 问题
  - 压缩，
  - 专注业务逻辑
## 埋点（4种方式）
- 埋点用于收集用户行为数据，帮助分析用户行为、优化产品体验。
- 基于ajax 的埋点上报：这种方式前后端约定一个接口
  通过ajax 上报数据，
  这种方式优点是灵活设置请求头属性，可以方式post请求
  可以进行大体量数据发送
  缺点是跨域问题，如果页面销毁，前端埋点监控大概率是失败的
- 基于image 埋点上报：前端创建一个image对象，将要上班上报的数据作为url参数
  拼接到 1*1 透明图片src 属性中，
  优点：兼容性好，没有跨域问题，
- navigator.sendBeacon: 目前通用埋点方案
  w3c新引入的补充的api ，解决web 页面触发和卸载时候中断
  区间

  优点：页面销毁，埋点数据正常发送
  缺点：因为是最新补充的api，兼容性可能不好
- web socket ：复杂埋点需求，发送实时埋点上报
  需要服务器支持，
 实现了页面关闭时的埋点上报，确保数据不丢失。”
- 简单埋点：image
- 大量数据而且有自定义数据：ajax，
- 关闭浏览器：navigator.sendBeacon;如果浏览器不支持，使用ajax；

## 10万数据
- 虚拟列表，scroll ，intersection observer
- 时间分片，使用requestAnimationFrame 根据刷新帧，进行分片
  使用requestAnimationFrame 函数和DocumentFrame 对象，

## vue 双向通信原理
- 