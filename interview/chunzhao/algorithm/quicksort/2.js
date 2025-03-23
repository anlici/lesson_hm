function bubbleSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len-1; i++){ // len-1 , 下面len-i-1 后i+1已经排好
        let swapped = false;
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // 交换 
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true; // 标记有交换
            }
        }
        if(!swapped) break; // 没有交换，提前结束
    }
    return arr
}

const arr = [3,4,1,2]
console.log(bubbleSort(arr));
