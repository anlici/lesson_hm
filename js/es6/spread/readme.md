
## 如何将字符串转成字符数组
   - 语言特性
     - 展开运算符
     - 字符串的split方法

   - 类数组
    nodeList 构造函数 prototype 原型对象
        Array 数组对象，构造函数 prototype 原型对象
        Array.prototype 获得所有方法
        item.__proto__ 获得所有方法,item为数组
    NodeList.prototype 获得所有方法 
      - 有length 属性，forEach方法等少量类数组行为的对象称为类数组
      nodelist 对象，__proto__,没有指向array的原型对象，只是拥有少数lenth属性和forEach方法等少部分的行为的对象称为类数组对象
      对象全部都是原型对象