
function quickSort(arr) {
    if(arr.length <= 1) return arr; // 递归结束条件
    const privot = arr[Math.floor(arr.length / 2)]; // 中间
    const left = arr.filter(item => item < privot);
    const right = arr.filter(item => item > privot);
    const equal = arr.filter(item => item === privot);
    return quickSort(left).concat(equal, quickSort(right)); // concat 连接
}
const arr = [2,1,4,3,2,3]
console.log(quickSort(arr))