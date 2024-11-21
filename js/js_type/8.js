let a = 1;
console.log(typeof a,typeof(a));//typeof 类型检测，是

// good Parts 好的，坏的：变量提升，eval

console.log(typeof a +" 1");//number1
console.log(typeof a + 1);// number1
console.log(a + 1);//2

console.log(typeof null);//object
console.log(typeof 12n);//bigint
console.log(typeof Symbol());

console.log(typeof function(){});//function