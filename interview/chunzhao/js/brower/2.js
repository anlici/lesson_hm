var a = {
    value: 0,
    valueOf: function() {
        return this.value++;
    }
}
console.log(a == 0 && a == 1 && a == 2);
console.log(a); // { value: 3, valueOf: [Function: valueOf] }


var obj = {
    value: 3,
    valueOf() {
        return 4;
    },
    toString() {
        return '5';
    },
    [Symbol.toPrimitive]() {
        return 6;
    }
}

console.log(obj + 1); 
    // number 加，字符串连接，
    // 对象转原始类型，Symbol.toPrimitive 优先级最高，返回 6 + 1 = 7 
