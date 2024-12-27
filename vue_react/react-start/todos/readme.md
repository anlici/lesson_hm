# 双向绑定

- title data 
  {{title}} 数据驱动的界面
  inpuut v-model="title" 
  input 输入时候， 输入框的值改变了， 和数据项title 不一样 
  @input 麻烦， v-model 专门解决数据双向绑定 

- :class  :value ?
  动态绑定属性业务时用: v-bind:

- 数据和界面保持一致

- all 所有任务的数量
  - title、todos 不一样 独立
  - all 依赖于 对todos 计算
  - computed 计算属性 
    形式是函数， 返回值是一个值
  - 当计算属性函数依赖项发生改变时， 会重新执行函数， 得到新的值
  - 关注函数体内的  数据属性 

- 计算属性
  - 计算属性的依赖项发生改变时， 会重新执行函数， 得到新的值
  - 
- 事件修饰符 
  - .stop 阻止事件冒泡
  -.prevent 阻止默认事件
  - .enter 按下回车

- v-model
 - 数据一致，v-model 修改数据，状态一致
 - 依赖项联动
   allDone true/false todos也变