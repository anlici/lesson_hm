// // instanceof
function myInstancOf(left,right) {
    if(typeof left !== 'object' || left === null) return false;

    let rightProto = right.prototype;// 获取构造函数的prototype对象
    let leftProto = left.__proto__;// 获取对象的__proto__
    // 可使用严格标准方法 Object.getPrototypeOf(left) 替代__proto__ 

    while(true) {
        if(leftProto === null) return false;
        if(rightProto === leftProto) return true;
        leftProto = leftProto.__proto__;
    }
}
// function myInstancOf(left,right) {
//     if(typeof left !== 'object' || left === null) return false;
//     let rightProto = right.prototype;
//     let leftProto = Object.getOwnPrototypeOf(left); // 获取对象的__proto__

//     while(true) {
//         if(leftProto === null) return false;
//         if(rightProto === leftProto) return true;
//         leftProto = Object.getOwnPrototypeOf(leftProto);
//     }
// }
console.log(myInstancOf({},Object));
