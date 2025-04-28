## 虚拟dom 和diff 
- 虚拟dom 是真实dom 在内存中轻量级副本，本质是内存中的JavaScript对象，用于描述真实DOM
- 新旧虚拟DOM使用Diff算法计算差异(patches)，然后更新真实DOM
- 能够一次性作用于DOM，减少DOM操作
- 结果：通常包含type(标签名)、props(属性)、children(子节点数组)
- 像vue ，将template 编译成虚拟dom，如果render渲染成真实dom
  如果数据状态发生变化，生成新的虚拟dom，然后和旧的虚拟dom进行对比，找出差异，然后更新真实dom
- Vue：使用h函数创建虚拟DOM节点；react： createElement 创建虚拟DOM节点

### 为啥有虚拟dom
- 减少dom，内存里面，重绘重排——批量，最小更新
- 跨平台
- 声明式编程，专注于描述UI的状态，而不是具体的操作DOM

### 哪些情况直接dom-
- 简单操作：修改单个文本内容、修改单个属性、添加或删除单个元素
- 频繁操作：频繁修改样式、频繁添加或删除元素
- 结合requeAnimationFrame，流畅动画
### Diff算法
- 作用 ：比较新旧虚拟DOM树的差异，生成最小化的DOM操作
- 核心原则 ：
  - 同层比较 ：只比较同一层级的节点，不跨层级比较
  - 类型判断 ：如果节点类型变化，不再比较子节点，直接替换整个节点
  - 唯一标识key ：如果节点有唯一标识，比较标识，否则比较位置
- Vue vs React的Diff ：
    - Vue的Diff算法更加优化，会跟踪每个组件的依赖关系，只更新需要更新的组件
    - React的Diff算法相对简单，但需要手动优化（如使用React.memo、useMemo等）

