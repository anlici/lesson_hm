// 最长不重复子串
const dep = (s) => {
    let left = 0;
    let cur = '';
    let maxSub = '';
    let charIndex = new Map(); // 
    for(let right=0;right<s.length;right++) {
        const char = s[right];
        if(charIndex.has(char)) { // 
            left = Math.max(left,charIndex.get(char)+1)
        } 
        // 更新字符最新位置
        charIndex.set(char,right);
        // 当前子串
        cur = s.substring(left,right+1);
        // 比较并且记录最长子串
        if(cur.length > maxSub.length) {
            maxSub = cur;
        }
    }
    return maxSub;
}
const s = 'ababaaba';
console.log(dep(s));
