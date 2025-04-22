var a = {
    value: 0,
    valueOf: function() {
        this.value ++;
        return this.value;
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
  
// ![] 逻辑非，[] 作为引用类型转true，![] 取反为false
console.log([] == ![]); // true 
console.log("" == ! ""); // false