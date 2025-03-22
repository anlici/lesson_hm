
function advancedBubbleSort(arr) {
    let len = arr.length;
    let lastSwapIndex = len - 1;
    while (lastSwapIndex > 0) {
        let newLastSwapIndex = 0;
        for(let i = 0; i < lastSwapIndex; i++){
            if(arr[i] > arr[i+1]) {
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
                newLastSwapIndex = i+1; // 记录最后交换的位置
            }
        }
        lastSwapIndex = newLastSwapIndex; // 缩小下一轮交换位置
    }
    return arr;
}
// 最后一个交换的位置，如果提前就表示后面已经有序，如何理解
console.log(advancedBubbleSort([4, 2, 3, 1])); // [1, 2, 3, 4]