## 显示类型转换和隐式

- Primitive 怎么转对象
  直接 new

- 对于"abc".length 包装类
  包装类的 valueOf()？
  new 和 valueOf() 区别？
  new 显示
  new 建立新的对象，valueOf() 是返回对象本身 一般使用的是 valueOf()

  
- 对象怎么转 Primitive

  - Boolean 
  - Number
  - String
    toString()
    
    prototype构造函数，__proto__原型链 实例对象 
    不用toString()为啥能转？
    
    Object.prototype.toString.call({a:1}) "[object Object]" 确切的类型 原型链
    数组，调用原型上的toString()
    对象字面量，本身object
    函数，function ，toString() 返回源代码
    日期 Date

   
- __proto__ 是关于“谁是我的父亲”，而 prototype 则是关于“我将成为谁的父亲”


- Object -> Primitive Number 怎么转
  - 调用 valueOf()
  - 先valueof方法，如果是原始值，就返回 
  - 否则，调用toString()返回原始值，返回
  - 如果返回还是返回对象，报错


- Object =>String | Number
  - toPrimitive 是使命
  - toString() | valueOf() 是实现
  - Number 优先 valueOf()
  - String 优先 toString() 
    合情合理
    否则报错 cannot convert to object to primitive value TypeError