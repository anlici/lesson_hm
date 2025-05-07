// /**
//  * @param {string} s
//  * @return {string}
//  */
var huiwen = function(s) {
    // let x = s.reserve();
    let x = '';
    for(let i=s.length-1;i>=0;i--) {
        x += s[i];
    }
    return x === s ? 1:0;
}
var longestPalindrome = function(s) {
    if(s.length === 1) return s;

    let res = '',cnt = '';
    let n = s.length,ans = -1;

    for(let i=0;i<n-1;i++) {
        for(let j=i;j<n;j++){
            res +=s[j]; // ba 
            if(huiwen(res) && ans < res.length) {
                console.log(res);
                if(ans < res.length) cnt = res; // 记录最长
                ans = Math.max(ans,res.length); // 更新
                 
            }
        }
        res = ''; //重置res
    }
    return cnt;
};
console.log(longestPalindrome("bb"));


var merge = function(nums1, m, nums2, n) {
    // n>m
    for(let i=m;i<n+m;i++) { // 插入再排序
        nums1[i] = nums2[i-m];
    }
    return nums1.sort((a,b) => a-b)
};
console.log(merge([-1,2,3,0,0,0],3,[-5,-1,6],3));
