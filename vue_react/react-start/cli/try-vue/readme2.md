- vue3 响应式
  - ref .value 响应式对象 Objevt.defineProperty 
    可以包裹对象 性能好
  - reactive 响应式'代理' props 
    关注这个对象属性，开销大
  - 组件上，@ 事件 ：父传子，传参数

- 父子通信
  - props 父传子 传数据 单项传递
  - @child-message="handleMessage" 自定义事件
    +处理函数（父） attrs 
  - 子组件 都要声明，defineProps 接收参数
    defineEmits 以数组形式，返回处理函数child-message
    emits(event, ...args)
    emits(event,params)
  