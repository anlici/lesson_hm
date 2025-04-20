## keep-alive
- keep-alive 内置组件，可以使组件在切换时保持状态，避免重新渲染。
- 可以通过 include 和 exclude 属性来指定需要缓存的组件。
- 可以缓存 <router-view>、列表渲染、组件缓存等。
- 需要缓存的组件push 到include 数组中，不需要缓存的组件push 到exclude 数组中。