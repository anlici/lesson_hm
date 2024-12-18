let objWithStringValue = {
    toString: function() {
      return 'hello';
    }
}

// 
console.log(Number(objWithStringValue)) // NaN
console.log(String(objWithStringValue)); // hello

let objWithValueof = {
    toString: function() {
      return this;
    },
    valueOf: function() {
      return 123
    }
}
console.log(Number(objWithValueof)) // 123

let objWithoutPrimitive = {
    toString: function() {
      return this;
    },
    valueOf: function() {
      return this;
    }
}
try {
    console.log(Number(objWithoutPrimitive)) // 没有toString前 NaN
    console.log(String(objWithoutPrimitive)); // 没有toString前 NaN
} catch (e) {
    console.log(e);
}