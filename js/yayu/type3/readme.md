## 走进js，走进讶羽

- 造对象
  - es6中 class 类：批量创建对象
    - 固定属性和方法name
  - 类和对象：
    - 类 class 是封装（方法和属性），是模版；
      包含constructor构造函数，对象的属性，有extends继承，super父类，有static静态方法
    - 对象 object 是实例，是具体的事物
- 构造函数
    - js 面向对象函数，首字母大写（推荐，区分普通函数），
      函数内部this指向实例对象；new 时候生成Person() ;
      class 里面constructor 构造函数；
    - this 作为指针，指向实例化对象，指向全局 window（浏览器下），
      完成实例化过程
 
  - 对象字面量：直接，随意并且不灵活

  - 类的方法：原型（prototype）；
    每个对象都有原型，函数对象都有一个原型，
    原型链：查找属性和方法，
    原型链的尽头是Object.prototype，预留空对象

  - js es5 的构建 = 构造函数（属性，对象的） + 
    原型（方法，所有实例共享，性能，this找到对象）
  - js 面向对象是原型面向对象，
    类是语法糖，方便；

  - person.
  - 将函数对象prototype 指向另一个对象，
    可以将方法添加到原型对象中，
    所有实例共享方法，节省内存；

- 原型对象：
  对象可以共享原型对象的方法，
  js 原型式面向对象 

## 三者关系
  - 构造函数
  - 原型对象
    不想class 类绑在一起，拆开的
  - 实例对象

- 原型是 JavaScript 中实现对象继承和共享属性、方法的一种机制，它允许对象从另一个对象继承属性和方法，避免了代码的重复和冗余。
   - es6 中 class 类：
     