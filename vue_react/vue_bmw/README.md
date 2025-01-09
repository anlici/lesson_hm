## vue3 生命周期
- 组件类实例
  - template 模版编译，css 合成
  - 挂载父组件，完成渲染
  - 

- v-if 与 v-show
  - 弹框，广告，loading...
  - 组件需要 toggle 时，v-show 更好 ，v-if 切换开销大
   - v-if 切换时，组件销毁重建，不会挂载到组件树； v-show 挂载到组件树 display:none css 切换
   - 
    - 响应式 showComponent
    - 
  - v-show 改变css display 属性，v-if 改变 DOM

- 组件是 vue.Component 
  3vbs :template + css +js 

- v-on 事件绑定指令，监听dom 

- 创建虚拟dom树，与之前的dom，最小化dom开销

# pinia

- 组件关系
  - 父组件 持有数据状态 message 共享子组件
    修改数据状态，兄弟之间共享数据状态
  - 子组件 持有数据状态 message 共享父组件
    修改数据状态，兄弟之间共享数据状态
  - 超越父子组件通信，共享

- 解构后store 失去响应式
  