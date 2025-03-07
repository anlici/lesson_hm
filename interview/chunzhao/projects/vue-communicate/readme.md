## 组件通信
- vue2/vue3 区别
- 设计模式
- vue3 8种，vue2 12种
- 父子组件
  - props defineProps
    两种写法，选项式 组合式（setup）
    setup 语法糖好维护；打破vue2 语法割裂逻辑限制，把响应式数据和方法放在setup中
    setup 方法（选项式） data里 状态，setup 返回响应式
    数据可以作为props 传递给子组件
    数据绑定传参 -> defineProps(类型和默认值 必填) -> 编译器宏函数（defineProps 无需引入 vue3.2 版本开始）

  - emit defineEmits 兄弟组件通信
    **单项数据流** 兄弟组件状态共享 数组状态由父组件控制，父组件通过props传递给子组件，
    子组件通过emit触发事件，父组件通过自定义事件来更新状态
    - expose defineExpose ref 暴露组件实例
      子组件暴露给父组件方法和属性
    - attrs
    - v-model
  
-  跨层级组件通信 共同祖先节点
  - provide inject  告诉其他在某个地方inject，
  - 全局共享状态通信 vuex/pinia
  - 父子传孙，不好；
  - 事件总线？ 订阅发布者 eventBus 
  - 全局事件总线？

## v-if v-show
- 1.v-if 是**条件渲染**，切换触发事件监听器、本身、子组件的挂载卸载
- 2.v-if 是惰性的，初始条件为假，性能更好
- 3.v-show 简单，初始条件是否都要渲染，基于css display切换
- 4.v-show 使用频繁切换条件的场景，v-if 条件很少改变

- 场景
  - 登入弹窗 v-if
  - form 表单 校验 v-show
  - 动画效果 v-show+transition
  - 用户权限显示（user，admin） v-if
## web worker
- web worker 允许主线程创建worker线程，让主线程与worker线程并行运行，主线程与worker线程可以交换信息。将一些计算密集，或高延迟的任务，放入worker线程，以免阻塞主线程。
- worker线程与主线程的通信，通过postMessage()和onmessage()实现。
- 创建worker线程
```js
if(typeof Worker !== 'undefined') {
  var w = new Worker('worker.js')
} else {
  alert('您的浏览器不支持worker')
}
```
- 通信
```js
// 主线程向worker发送消息
worker.postMessage('hello worker');
// 主线程接收worker的消息
worker.onmessage = function(e) {
  console.log('main thread: ', e.data)
}
// worker接收
self.onmessage = function(e) {
  console.log('worker: ', e.data)
  self.postMessage('hello main thread')
}
```

## 路由模式
- hash 路由 history 路由
  使用spa单页面，前端路由：SPA只需要更新需要资源，不会刷新整个页面，减少白屏渲染时间，提高用户体验。
  不用到服务器，减少请求次数，页面在本地快速切换
  一堆扑克 切换 头尾不动，中间router-view 渲染
- 两种路由模式，优劣
  hash 以#开头，兼容性好 #是url 把一部分
  history 支持前进后退，兼容性差，需要后端支持
  https://3000.com/:id 锚链接 
- hash 切换时触发hashchange事件 router 配置
  hash => component 替换router-view
  table 
  hash 兼容性好，刚开始是为了在长页面做锚链接，现在用在SPA
  作为url 一部分，切换时触发hashchange事件，像一堆卡牌一样进行切换
  router-view节点（切换0毫秒），在router 配置里面，url 修改hash，页面 component 替换成对应router-view
  只改hash 不会刷新整个页面

- ios 安卓，不用url；后面前端使用混合式开发
## 10万数据渲染
- event loop
  
```js
const arr = [
  {
    id: 1,
    isActive: true
    math:78,
    eglish:89,
  },
  {
    id: 2,
    isActive: false
    math:88,
    eglish:98,
  },
  {
    id: 3, 
    isActive: true
    math:98,
    eglish:88,
  }
]
const totol = arr
  .filter(item => item.isActive)
  .reduce((sum,item) => sum + it
  em.math + item.eglish,0)
```
```js
const arr1 = [
  {a:1,b:{c:{d:{e:1}}}}
]
const arr2 = [
  {a:1,b:{c:{d:{e:1}}}}
]
// 比较 递归
function compare(arr1,arr2) {
  if(arr1.length !== arr2.length) {return false}
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[0][key] !== arr2[0][key]) {return false}
    if(typeof arr1[0][key] === 'object') {
      compare(arr1[0][key],arr2[0][key])
    }
  }
  return true
}
// 使用isEqual
const _ = require('lodash/isEqual')
const isEqual = _.isEqual(arr1,arr2)
console.log(isEqual)

```
console.log(JSON.stringify(obj1)); // 输出: {"a":1,"b":2}
console.log(JSON.stringify(obj2)); // 输出: {"b":2,"a":1}
虽然 obj1 和 obj2 的属性值相同，但由于属性顺序不同，生成的 JSON 字符串也不同。因此，比较这两个字符串的结果是 false：

- git hooks
  - pre-commit 阻止提交
  - pre-push 阻止推送
  - pre-rebase 阻止rebase，
  - pre-receive 阻止push到远程仓库
  - post-receive 推送到远程仓库后执行
  - post-checkout 切换分支后执行
  - post-merge 合并分支后执行
  - post-commit 提交后执行
- git merge 冲突解决：
 - git checkout -b patch-branch main 基于main分支，创建临时补丁分支
 - git checkout main 切回main分支
 - git merge --no - ff patch -branch 补丁合并到mian分支

- git 提交冲突
  - 手动解决
    - git status 查看冲突文件
    - 打开冲突文件<<<<<<< HEAD
这是 current_branch 上的内容
=======
这是其他分支（如另一种分支）的内容
>>>>>>> branch_name
 * `<<<<<<< HEAD`上面是当前分支（当你执行`git pull`等操作时，当前分支是你正在工作的分支）的相关内容，而`=======`下面是另一个分支（如你在拉取时有冲突的分支）的内容。
3. 手动编辑解决冲突
* 根据实际情况，手动编辑文件，决定保留哪一部分内容或者对两部分进行整合。例如，如果是一个文本文件，你可能需要对比两部分内容的逻辑，选择合适的句子或者段落进行保留或者重新组织语言。
* 如果是一个代码文件，比如 Java 文件，你可能需要考虑代码的功能实现，判断哪种实现方式是正确的，或者如何将两者的修改合并到一起以实现期望的功能。
标记冲突已解决
当完成文件的修改后，使用git add <file>将解决冲突后的文件添加到暂存区，这相当于告诉 Git 该文件的冲突已经解决。
提交解决后的文件
最后，使用git commit -m "解决冲突的相关描述"命令提交解决冲突后的文件。

