# js数据类型

- js 数据类型分为简单数据类型和复杂数据类型
   - 简单7：number、string、boolean、null、
   underfined、symbol（es6新增）、bigint（es6新增）
   es6：numeric(number+bigint) ,数值型
   - 依据内存分配机制！复杂数据类型 放到堆内存，栈内存存在一个指向堆内存的指针
   - 简单赋值：拷贝，复杂：引用
   ## 内存分配机制
     -拷贝，引用
   - 复杂：object、function、array，
   
   - null？值为空，null这种类型object类型
    表示一个空的对象指针，
    表示空值!或是不存在的对象!，

   ##  underfined？
       类型变量未定义
## symbol ?
   es6新增， 唯一值，不能new，唯一标识
   表示任何类型的唯一值，包括字符串，对象，函数等
   - 以函数形式创建，简单值，
   - 即便标签一样，但是值不一样

## bigint?
    大整数，最大安全整数，超出范围会报错，可以是一个任意精度的整数
   
- 在词法环境和变量环境下，执行代码都会进入执行栈，但是对于复杂，会在栈内存存有一个引用地址，指向复杂类型所开辟的堆内存

- primitive data type 简单数据类型，值不能更改；一个原始值赋给另一个变量，实践是复制
函数，数组等很多特性无法表达，
## 对象
- 无序的键值对，
- 函数？函数对象，被当成一等对象，可执行对象
- 包含属性和方法，
- 函数声明在代码执行前被解析，函数表达式执行时被解析，
- 函数可以作为参数，

## 数组
- 可以迭代，遍历的对象
- 
## typeof
- 对于null 是object类型，是设计师的一个bug，
- 前三位是类型的值，null object 都是  000 
举个栗子:"123" 123 前三位不一样

## 复杂
- reference data type 复杂数据类型，值可以更改；一个引用值赋给另一个变量，实际是复制了一个指针，指向同一个对象，修改一个，另一个也会改变

## ecma262 JavaScript语音的标准规范
- 区分多种对象
- 得到变量确切类型

- 