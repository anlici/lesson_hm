口诀：
- 谁调用，this 指向谁（对象.方法()）。
- 普通函数/直接调用，this 是 window（或 undefined）。
- 箭头函数无 this，继承外层。
- call/apply/bind，this 明确。
- 构造函数 new，this 是新对象。
- 作为参数传递，调用方式定 this。

```js
var a = 10

var foo = {

a: 20,

b: function () {

var a = 30;

return this.a;

},

// 箭头函数没有this，向外层最近的函数找

c: () => {

var a = 40;

return this.a;

},

}

var d = {

a: 50,

}

console.log(a) // 10

console.log(foo.b()) // this指向调用它的对象 20

console.log(foo.c()) // underfind

console.log(foo.b.bind(d)()) // 50

console.log(foo.c.bind(d)()) // underfind
```