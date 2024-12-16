 console.log(parseInt("abs123")); // NaN
console.log(parseInt("123abs")); // 123
console.log(parseInt("abc")); // NaN
console.log(NaN == NaN); // 不代表确切值,但是可以通过isNaN()来判断

// true true false
console.log(isNaN(NaN),isNaN("abc"),isNaN(parseInt("123abc")));


// rest 
