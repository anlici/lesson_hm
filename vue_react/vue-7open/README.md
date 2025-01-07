
# vue hooks 编程
- vue 组件思维
- 生命周期钩子
- 内存泄漏
  移除事件监听器，事件处理函数无法被回收
  v-if 卸载dom 或 不再监听事件，调用removeEventListener方法，一般使用onUnmounted

- es6 模块
  - import from 引入
    import Obj from export default 默认输出
    import { a,b} export对象

  - use 后导出状态
  - 组件 = UI + state +业务逻辑
    组件简洁号维护，复用性高