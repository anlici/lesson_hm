### 富文本编辑器
- 光标协同，使用webscoket实现

- 命令模式：对应命令创建不同标签，

### proxy 代理，实现数据的双向绑定（数据劫持）
- new Proxy(obj, handler) 对象 和 handler 对象
- handler 对象有 get set 方法
  - get(target,property) 
  - set(target,property,value)
    在set 进行额外操作
```js
let obj = {
  name: 'zhangsan',
  age: 18
}
const container = document.getElementById('container')
let proxy = new Proxy(obj, {
    get(target, property) {
        return target[property]
    }
    set(target, property, value) {
        target[property] = value
        container.textContent = value // 监听数据变化，呈现在页面上
        return true
    }
})
```
- Object.defineProperty 

- module 模块化
  - commonjs
  - es6 export import
  - 根模块：type = module 

- git 回滚操作，可能因为修改冲突，需要手动修改
- 合并：git merge origin/master。可能会有冲突，需要手动修改
- 更新冲突，重新下载，在通过Beyond comapre 工具，手动修改；
  也可以先暂停本地修改 git stash ，然后更新代码，再恢复本地修改 git stash pop
- 上传
  - 先提交到缓存区 git add . 可以使用git status 查看修改文件列表
  - 大小写不敏感，

- git 代码覆盖，冲突，多环境，多人协作，日志规划
  - 开发 -> 测试 -> 线上 三个环境，可能覆盖
  - 日志规划，

### 设计模式
- 单例模式，只有一个实例
- 观察者模式，一对多关系，一个对象状态改变，其他对象收到通知
- 工厂模式，类来创建对象，灵活，
- 