function arrEqual(arr1,arr2) {
    // 类型不一样
    if (arr1.length!== arr2.length) {
        return false;
    }
    const countMap = new Map();// 记录次数
    for(const item of arr1) {
        countMap.set(item,(countMap.get(item) || 0) + 1);
    }
    for(const item of arr2) {
        const val = countMap.get(item);
        if(val === undefined || val <= 0) {
            return false;
        }
        countMap.set(item,val - 1);
    }
    return true;
    
}