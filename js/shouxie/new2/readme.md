
/**
 *  创建空对象
 * 1. 构造函数执行，this指向obj，对象属性构建；\
 * 2. 对象的私有属性__proto__指向构造函数的原型对象；\
 * 3. 如果有返回值，就返回该返回值，否则返回obj；
 *   (json 反复写属性，只构造方便；不需要prototype)
 */

- 精彩地方
  - es5 arguments.shift.call
  - es6 ...args
  - 构造函数返回值
    - prototype 不需要，需要构造过程，直接返回有需要的，比JSON方便
    - return null 空对象也可以