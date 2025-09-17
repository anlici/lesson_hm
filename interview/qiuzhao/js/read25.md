## bind ,call,apply 区别和使用场景
- 都是用来改变this指向的
- 都可以接收参数
- bind返回的是函数，call和apply会立即执行
- bind 参数和call 类似，逐个传
  apply 第二个参数是数组

## CSS实现两个子元素2:1比例分割父元素
- flexbox：
  - 父元素设置display: flex;
  - 子元素设置flex: 1;
    另一个 flex：2；
  - 默认水平，flex-direction: column; 垂直
- grid
  父元素设置display: grid
  通过grid-template-columns: 2fr 1fr设置水平方向的 2:1 比例
  如需垂直方向分割，使用grid-template-rows: 2fr 1fr

## 父子通信，props+callback 驱动优先，第三方，context
- hooks: forwardRef, useImperativeHandle,useRef
  - useRef 用于获取DOM节点
  - useImperativeHandle 用于暴露方法给父组件
  - forwardRef 用于传递ref
- 利弊：
  - 违背了React单向数据流理念，增加了组件间的耦合度

##  flex:1  // flex: [grow] [shrink] [basis]（如 flex: 1 1 0%）
- flex-basis 初值，
- flex-grow 可分配空间，默认1
- flex-shrink 可缩小空间，默认1

## interection observer 
- 监听元素是否进入视口
- 浏览器异步触发，合并连续状态变化，
  例如快速滚动时，不会对每个像素的位置变化都触发回调，而是在状态稳定后一次性触发

