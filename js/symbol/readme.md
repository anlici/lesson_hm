## symbol

- 唯一
- 用Symbol 函数声明的变量，不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
- 常用于对象字面量 给一个lable 可选
- key 不用担心覆盖

  - Object.keys() 对象键值数组，但是不包括Symbol 类型键名
  - Object.values() 对象值数组，但是不包括Symbol 类型键值
  - Object.entries() 对象键值对数组，但是不包括Symbol 类型键值对

  - call 立即执行，
  - bind 绑定this，