const arr1 = ['apple',1,'banana']
const arr2 = ['apple','banana',1]
// 比较引用，内存地址不一样
console.log(arr1 == arr2); // false 不一样? 数组的顺序不一样B

function arrEqual(arr1,arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // false some arr1至少一个元素arr2不存在返回false，indexOf 查item
    return !arr1.some( item => arr2.indexOf(item) === -1);
}

console.log([1,2,3].indexOf(1),[1,2,3].indexOf(4)); // 0 -1
console.log(arrEqual(arr1,arr2));
