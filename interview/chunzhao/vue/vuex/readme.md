## 数据流 vuex
- 适用vue 2.x，进化到vue 3.x hooks 版本
- 在main.js文件中vuex使用的是导出的store仓库，而pinia是使用实例化对象

## 浏览器解析
- dns 解析
- tcp 连接
- dom + cssom  形成渲染树
- layout 计算渲染树，进行重排重绘（自己延伸，这个区别）

## css 动画
- requestAnimationFrame 浏览器刷新频率，保证动画流畅性，
- css 动画，由浏览器渲染引擎，at-keyframes 保证关键帧
## 加载速度
- cdn 加载，
- 压缩图片。
- 懒加载，可视区
- js，减少
- 首屏加载，先加载关键资源，再加载其他资源

## vue 懒加载
- 异步组件，切换时候加载对应代码；
## 打包
- dict 压缩，build 打包，dev 开发

## 代码封装，code-split？
- webpack 构建
- 

## 浏览器缓存
- 强缓存：no-cache 使用expires ，
  如果命中，让磁盘或内存缓存中读取，
  expires 这个时间戳是绝对的，
  cache-control: max-age=60，设定相对时间长度
  项目兼容，expires 优先级低，
- 协商缓存：last-modified，etag，
  last-modified 缓存时间戳，每次请求时，都带上if-modified-since，
  服务器发现没有改变，返回304
  last-modified 根据编辑时间，进行返回结果；以s为最小时间的时间差
  etag出现，如果文件内容不同，获取最初标识符字段；if-none-match
  etag 计算，影响性能；
  etag 优先级高一点，
- etag 怎么计算？

## lat-worker 查看响应头

## AI 项目
- 
## vue3
- 虚拟列表，快速标记，vue2 
- setup 语法糖，vue3 
- reactive 
- ts 更加优好，

## js 对象，内存回收机制
- 标记-清除：标记从根对象，从window或当前对象开始，将当前对象标记为使用对象
- 引用计数法
- 闭包和事件监听器，
- 当dom 元素被移除，内存回收机制会自动释放内存，
  移除可以使用，webmap，webset，

## 页面渲染，卡顿怎么办？
- webWorker 新新线程，主线程通过postMessage，通过message接收消息
- ylld  生成器，yield 暂停，next 继续
  当函数遇到yield，调用迭代对象，使用next 继续执行

## 爬楼梯
- 递归，
- 动态规划，dp 状态转移方程
- ofr 云