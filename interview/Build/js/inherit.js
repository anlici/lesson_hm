// function Parent() {
//     this.name = 'parent';
//     this.play = [1, 2, 3];
//     this.getName = function() {
//       console.log(this.name);
//   } 
//   }
//   function Child() {
//     Parent.call(this);
//     // this 执行时指向 Child 实例，parent 属性和方法直接添加到 Child 实例上
//    this.name = 'child'; 
//   }
//    Child.prototype = new Parent();// 继承parent 原型上属性和方法

//   var child = new Child(); // 先设为parent，再设为child
//   var child2 = new Child();

//   child2.name = 'child2';
//   child2.play.push(4);
//   child.getName(); // child

//   console.log(child.play); // [1, 2, 3]
//   console.log(child2.play); // [1, 2, 3, 4]

//   console.log(child instanceof Parent); // true
//   console.log(child instanceof Child); // true
  


function Parent2() {
    this.name = 'parent';
    this.play = [1, 2, 3];
}
function child3() {
    Parent2.call(this);
}
child3.prototype = Object.create(Parent2.prototype); // 继承parent 原型上属性和方法 
child3.prototype.construtor = child3; // 修复构造函数指向问题，执行child 而不是parent

// 在extends 里面编译js ，也是用的这种继承方式
// 但是继承本身是面向对象，
// 有时候有问题：一辆车加油，车身等；但是电动汽车没有加油。但是继承则是全部继承。