## keep-alive
- component 动态组件
- onActive 钩子
- onInactive 钩子
- 性能优化
  - 缓存组件
  - 缓存之前访问的页面（表单、滚动位置）
  - include、exclude、max

-<keep-alive>
  <component :is="Component" />
</keep-alive>

- transition 动画组件 添加一些类名，声明周期
  - v-enter-active  
  - v-leave-active 
