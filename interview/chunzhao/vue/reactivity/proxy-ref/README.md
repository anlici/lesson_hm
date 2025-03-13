## proxy
- 项目里面，响应式对象很多，但reactiveMap 只有一个 会有性能问题？
  - 按 router-view 切换，使用weakMap，能够垃圾回收
  - 一个对象，方便找到对应的响应式对象
- get 
  set 