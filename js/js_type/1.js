let a = null; // 栈内存，快速处理小空间，地址明确，
console.log(a);
let largeObject = {
    data : new Array(10000000).fill('a'),
}
// 赋值null，将栈内存的地址指向null，堆内存对象不再被引用，会被回收
largeObject = null; 
// 堆内存，复杂（对象和数组），在栈内存存一个指向堆内存的引用，
console.log(largeObject);