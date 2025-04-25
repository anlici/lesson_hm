var a = {
    value: 0,
    valueOf: function() {
      return ++this.value;
    }
}
console.log(a == 1 && a == 2); // true

var obj = {
    value: 3,
    valueOf() {
      return 4;
    },
    toString() {
      return '5'
    },
    [Symbol.toPrimitive]() {
      return 6
    }
  }
  console.log(obj + 1); // 输出7
  
// [] 引用转true， ![] 则为false，
//  [] == false， 继续隐式类型转，false = 0, 
// [] == 0,[] 使用toSting 转“”， “” 转 0， 0 == 0， 所以[] ==![] 为true
console.log([] == ![]); // true 
console.log("" == ! ""); // false