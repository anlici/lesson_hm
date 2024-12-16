## js 类型转换

- es6 之前，js有哪些类型？6种
  - 简单数据类型，Primitive 拷贝式赋值
    原始：number、string、boolean、null、undefined、symbol
  - 复杂式 Reference 引用式赋值
    object
- js 类型会改变？
  - js 是弱类型语言
  - 变量可以改变
  - 搞清楚确切类型 
    - Primitive 雷先生 -> 其他类型
      - Boolean 显示类型（构造函数）转换
        - false 
         ```js
          console.log(Boolean()); // 没有传值，被设定为underfined ，输出false
            console.log(Boolean(undefined)); // false
            console.log(Boolean(null)); // false
            console.log(Boolean(NaN)); // false 不是数字
            console.log(Object.is(+0,-0)); // false
            console.log(Boolean(+0),"+0"); //false
            console.log(Boolean(-0),"-0"); // false
            ```
        - 
    - Reference 雷先生 -> 其他类型
  
- +0 -0
  Object.is()
  1/0 , 1/-0,1/+0 infinity
- NaN 
  类型是Number,

- Number()
  0 1 NaN 剩下就是数字本身
- ToNumber()是一个抽象操作，用于将各种类型的值转换为数字。