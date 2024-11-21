// symbol 唯一标识符,es6 新增类型，

let a = Symbol('a');
//Symbol(a)

console.log(a);
console.log(typeof a);// symbol
// '===' 或 '==' 比较内存地址，
console.log(Symbol('a') === Symbol('a'));// false
console.log(Symbol('a') == Symbol('a'))// false
// Symbol.for() 方法，并且有相同标识符
console.log(Symbol.for('a') === Symbol.for('a'));// true