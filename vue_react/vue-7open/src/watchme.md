## watch 与watchEffect 区别
- 深拷贝、浅拷贝
  reactive 
  watchEffect  是响应式的，会自动收集依赖


- watchEffect与watch 参数区别
  - watch 第一个参数，可以是响应式数据源也可以是数组、
  - 第二个参数是回调函数，拿到新旧值
  - 第三参数，选项immediate 立即执行回调函数，默认false，deep

- v-model.number 可以将输入的值转为数字类型
