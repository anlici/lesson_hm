function compareVersion(v1,v2) {
    const v1Arr = v1.split('.').map(Number);
    const v2Arr = v2.split('.').map(Number);

    const maxLen = Math.max(v1Arr.length,v2Arr.length);

    for(let i = 0;i<maxLen;i++) {
        v1Arr[i] = v1Arr[i] || 0;
        v2Arr[i] = v2Arr[i] || 0;
        // 补全
        if(v1Arr[i] > v2Arr[i]) {
            return 1;
        } else if(v1Arr[i] < v2Arr[i]) {
            return -1;
        }
    }
    return 0;
}

console.log(compareVersion('1.2','1.2.2')); // -1 小于