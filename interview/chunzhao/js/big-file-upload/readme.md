## 大文件上传
- 问题：
  - 耗时 一个tcp ip 超时上传中断
  - 服务器对请求大小或上传时间有限制
- 压缩：zip gzip
  - 减少传输数据量，压缩减少体积，减少长传时间和宽带消耗
  - 网络传输更稳定
  - 节省服务器占用存储空间

- http 大文件 普通上传 1个http 连接 1.0 单个连接明文传输协议，网络中断或波动，整个文件
  分片 http 2.0 多路复用 二进制流式上传（流id 每个文件作为一个流），重新上传某个文件
  n / p，p为片数
- 单连接 受到网络波动影响，断点续传
  多连接，分片数量大，管理难度大，断点续传
- 用户体验
  - 进度条 暂停 断点续传
- e.target.files 包含文件对象数组，可以拿到文件在操作系统存储是头部信息
- **切片大小设定：**
  1-5mb 2mb常用 可以动态微调大小
  服务器并发数限制，控制并发数，控制文件上传速度
  promise.all 并发请求
  平衡网络和多路复用上限
  - **限流上传**，使用promise.all 配合一个固定大小并发池来控制同时上传分片数量
    - 固定并发池，从分片队列取出若干分片进行上传，完成后再上传剩余；如果任务数量达到限制，使用promise.race 来等待某一个分片上传完成，再继续取分片上传；
    - 利用 Promise.all 等待当前并发池中的所有任务完成后再继续处理剩余分片


- 大文件上传 秒传（秒传），断点续传   webWorker 执行
  - 秒传：文件名+文件大小+文件md5值，判断是否已存在，存在则秒传，不存在则上传
    hash 值比对，前后端 md5值比对 前端：分片、webWorker（浏览器机制）
    事件机制 监听上传进度，上传成功后，保存上传进度，下次上传时，从上传进度开始上传
  - 断点续传：文件名+文件大小+文件md5值+已上传分片数+已上传分片md5值，判断是否已存在，存在则断点续传，不存在则上传

- 耗时性任务，可能影响系统idle 
- html5 新特性：postMessage、webWorker、文件处理的file 文件流 buffer
  
- worker 处理耗时
  - 股票：
  - 哈希值计算 crypto 加密算法，计算hash值
  - 切片计算，同步任务、切的数量多时间耗时
  - 
- 切片是什么？
  - Blod 二进制对象 
  - 文件不同，头信息不同，文件展示不同
  - 文件对象基于Blod 原型创建，继承上面slice 方法，根据偏移量 截取文件片段
  - <input type="file" name="文件" id="input"  />
    <button id="upload" type="button">上传</button>

- multiple 多个文件
- 全栈模拟，理解深度
  - 前端
    - 进度条
    - 
  - 后端
    - 

- 多路复用
  
- 服务器推送

- 二进制分帧

## 字节面题：
- 响应式适配：
  - 媒体查询media 根据屏幕宽高设置样式
  - 百分比，根据父元素自动调整
  - flexbox 弹性布局，
  - grid 网格布局
  - rem rem 根元素字体大小，1rem = 16px
  - vw vh vmin vmax 视口宽度高度，vmin vmax 值最小值最大值
  - lib-flexible 是font-size适配库，根据屏幕宽度自适应，使用rem，实现移动端弹性布局
- git 相关
  - git reset --hard 恢复到指定版本，回滚
  - 已经提交远程仓库，使用git revert commit-hash 回滚
  - 合并了想撤销合并，git revert --hard orig_head(合并前保存的指针)
  - git rebase --abort 取消rebase
  - git rebase --continue 继续rebase
  - git rebase -i HEAD~3 3个commit，合并成一个commit
  - git checkout --ours 文件名 完全使用自己的代码覆盖冲突

- 浏览器缓存：
  - service worker 离线缓存，离线访问，离线更新，离线推送
    - 离线缓存：拦截网络请求，使用caches匹配响应，在监听install下载到本地，实现离线访问
    - 缓存更新：监听activate事件，对cache里面资源进行过滤，更新缓存
    - localStorge 
    - indexdb 大容量存储，存储结构化数据，离线存储，离线更新，离线推送
  - http 缓存：
    - cache-control and expires 响应头，让浏览器从本地缓存加载内容。设置max-age 缓存时间，缓存时间到了，重新请求服务器，更新缓存
    - 通过etag 和last-modified 响应头，浏览器》？

- css 选择第二个兄弟元素：
  .parent > p:nth-of-type(2)

  only-of-type 选择父元素唯一子元素
- ts 同时想要a类型还要b 类型，
  - 使用&（交叉类型）
  - 使用|（联合类型），一个值有多种类型
    - extends 接口继承，泛型约束
  - type 类型别名，结合多个类型，使用type
- node 存储内容很多,怎么办，使用npx吗？就是启动服务器大小怎么设置？
  - node 内容存储太多，是因为nodejs进程内存使用量有限，在v8 引擎上，会限制堆内容大小
    通过--max-old-space-size=4096 设置堆内存大小，单位MB，
  - node --max-old-space-size=4096 ./index.js 从1.4g、2g(64位) 到4g
  - 如果还是很大，建议数据库，进行**交互式**，或**fs**操作文件系统存储，当然持久化存储；文件系统，存储文件和目录
  - nodejs 存储运行时的数据结构、变量等，临时或运行的，优化：流式处理，缓存机制redis 
- 平铺数组为树状数组，
```js
const flatArr = []
function buildTree(flatArr, parentId = null) {
  return flatArr.filter(item => item.parentId === parentId)
  .map(item => {
    ...item,
    children: buildTree(flatArr, item.id)
  })
}
const treeArr = buildTree(flatArr)
JSON.stringify(treeArr,null,2) // null 不过滤，全部属性序列化；2 缩进空格
```

- 苹果刘海屏，怎么做不同设备适配？
  - viewport-fit: cover; 包裹整个屏幕，包括底部home indicator
  - 设定安全区：env(safe-area-inset-top)顶部安全，避免底部home indicator
  - flexbox 动态调整内容区域
