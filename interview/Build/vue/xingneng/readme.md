## keep-alive底层原理
- keep-alive 是一个vue内置组件，主要用于缓存组件实例，避免重复创建和销毁，提高性能。(*不会渲染出 DOM 元素，也不会出现在父组件链中)。它的底层实现主要依靠以下几个关键部分：
    - 缓存机制：keep-alive 内部使用一个对象 cache 来存储缓存的组件实例，键是组件的唯一标识key，值就是对应组件的虚拟节点vnode。同时，使用一个数组keys 来维护这些实例缓存顺序
    - 而每个缓存顺序通过 lru 算法进行维护，当缓存的组件数量超过max 属性指定的上限时，会优先移除最久未使用的组件实例。
    - 另外，keep-alive 还会在组件声明周期中添加activated 和 deactivated 钩子，当组件被激活时触发activated，被缓存时触发deactivated，并且不会再触发mounted 和 unmounted 钩子。
    - 最后，核心代码逻辑是在keep-alive 的render 函数里面，会获取默认插槽的第一个组件节点，再根据include 和exclude 属性判断是否需要缓存该组件。若需要缓存，就检查cache 中是否已有该组件实例，有则直接从缓存获取，没有则添加到缓存里。

- keep-alive 内置组件，可以使组件在切换时保持状态，避免重新渲染。
- 可以通过 include 和 exclude 属性来指定需要缓存的组件。
- 可以缓存 <router-view>、列表渲染、组件缓存等。
- 需要缓存的组件push 到include 数组中，不需要缓存的组件push 到exclude 数组中。


