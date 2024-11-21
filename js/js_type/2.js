let obj = {
    name:'磊磊',
    job:'AI大咖',
    company:'阿里',
};
// 添加属性；堆内存，动态变化，
obj.hometown = '北京';
let a = 1;
let b = a;
b = 3;
// 赋值引用，地址指向同一个堆内存，
let obj2 = obj;
let obj3 = {...obj};

obj2.name = '小明';
// 引用
console.log(obj.name,obj2.name);//小明 小明
// 结果：1 3
console.log(a,b);


console.log(obj3.name);