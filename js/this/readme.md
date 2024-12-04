## this
   
   - this 函数运行环境指针
      - 堆内存，对象和函数
      - 栈内存，指针地址
- this 值有哪些？
  函数调用方式相关，值不固定，
  - 普通函数，this 指向全局对象 window
    - 严格模式下，this 指向 undefined

  - 对象方法，this 指向调用对象
  - new 构造函数调用，this 指向实例后的对象
  - 指定this 调用方式
    - call() 第一个是 this 后面的参数是函数的参数，第二个是函数的参数
    - apply() 第一个是 this 第二个是参数数组
    - bind() 新建一个函数，绑定 this
   - outer 沿着作用域链向上查找，直到找到全局对象
     - 