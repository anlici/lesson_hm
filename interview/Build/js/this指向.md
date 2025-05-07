口诀：
- 谁调用，this 指向谁（对象.方法()）。
- 普通函数/直接调用，this 是 window（或 undefined）。
- 箭头函数无 this，继承外层。
- call/apply/bind，this 明确。
- 构造函数 new，this 是新对象。
- 作为参数传递，调用方式定 this。