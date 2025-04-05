## 深拷贝
- 深拷贝和浅拷贝的区别
  - 浅拷贝：简单数据类型拷贝值，复杂数据类型拷贝地址（引用）
  - 深拷贝：复杂数据类型**开辟新空间**，简单数据类型拷贝值

- JSON.parse(JSON.stringify(obj)) 函数、underfined、symbol 无法拷贝
  循环引用对象无法拷贝

- 递归实现深拷贝
  - 遍历 for(key in obj) forEach
  - 递归 
  - 循环引用 循环引用对象无法拷贝 WeakMap(key 作为对象)
  - （更加复杂类型：函数、正则、Date、DOM）

- for in 遍历,所有可枚举属性，包括继承的属性，意外
- 