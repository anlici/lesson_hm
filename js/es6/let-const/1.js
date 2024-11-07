function sayHello() {
   var name="Rohit";
   return "Hello " + name;
}
// es5
var age=20;
var name="fastRot";
if(age>5) {
    //es6 新增let 块级作用域 2015年
    let dogYears=age*7;//
     name="anlici";//重新赋值
    console.log(name+"" + age + " years is equal to " + dogYears);
}
console.log(sayHello());
// console.log(dogYears);//dogYears is not defined
console.log(name);//

