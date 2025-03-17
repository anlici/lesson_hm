### watch 和 watchEffects 的区别
- 响应式数据数据变化
  ref & reactive 简单状态绑定
  computed 响应式计算 自动处理依赖 缓存
  购物车totol 计算
- watch 监听响应式数据变化 显示监听数据源变化（ref，reactive对象或getter函数）执行复杂逻辑，监听特定数据变化。支持获取新值 (newVal) 和旧值 (oldVal)
  手动指定依赖
- watchEffect 在初始化时立即执行一次回调，多个监听，自动处理 数据修改后的副作用（effect）
  - 自动收集依赖
  - 立即执行一次
- 使用computed 替代toRefs 保持响应式
  
- 当watch 返回一个对象,需要执行一下，需要使用deep 深沉
```js
watch(()=>{log('执行一下')},{deep:true})
```
## 泛型
- 类型传参，<T> 
- 泛型约束，<T extends number>
- vue3 全面支持ts 
- 约束返回值，
- 可选链：?.
- 断言：as !. 如果值为null 或underfined 抛出错误
- 
## es6 模块化规范
- es6 模块化规范，export default 默认导出，export 导出多个，import {a,b} from 'xxx'
- 可选链操作符，?.  并且使用 || 逻辑或
