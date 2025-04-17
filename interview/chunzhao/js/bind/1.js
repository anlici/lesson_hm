// write bind
// 慢慢收集 柯里化
// Function.prototype.mybind = function (context,...args) {
//     return (...newArgs) => {
//         this.call(context,...args,...newArgs)
//     }
// }
Function.prototype.mybind = function(context,...args) {
    const fn = this;
    const boundFn = function(...newArgs) {
        return fn.call(this instanceof boundFn ? this : context,...args,...newArgs);
    };
    boundFn.prototype = Object.create(fn.prototype);
    return boundFn;
}

function add(a, b, c) {
    return a + b + c;
}

const partialAdd = add.mybind(null, 1, 2);
console.log(partialAdd(3)); // 输出: 6