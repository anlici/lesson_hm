## 数组相等判断
 
- 不使用排序，不考虑位置
  [1,2,3] 和 [2,3,1] 相等

- some 有一个不相等就返回 true
  indexOf 也可以使用
  ```js
  [1,2,3].some(item => [2,3,1].indexOf(item) === -1)
  ```
  
  ```js
  [1,2,3].some(item => [2,3,1].includes(item))
  ```
- Map es6 新增数据结构，之前有 JSON面向字面量
  set不重复