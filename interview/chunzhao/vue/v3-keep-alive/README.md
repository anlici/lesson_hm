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

## vuex

## 生命周期
- vue 
  - beforeCreate
  - created  请求数据？可以进行数据请求，响应式数据 什么情况下，不能直接渲染？
    响应式数据直接在dom里面，v-for ？
    vue3 在onMounted 才数据请求，而created 就可以
  - beforeMount 

- vue3 需要再onMounted 里面进行数据请求，而不是beforeMounted
  **vue3 规避SSR 副作用，并保证逻辑在客户端执行**
- 父子组件，都监听，是哪个组件先触发
  
- react
  - useEffect []  
  - [loading] update
    () => {
      unmount()
    }