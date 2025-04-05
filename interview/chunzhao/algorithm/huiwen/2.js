function longestPalindrome(s) {
    let start = 0,
        maxLen = 0;
    if(s.length <= 1) return s;
    function expandAroundCenter(left,right) {
        while(s[left] === s[right] && left >= 0 && right < s.length) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
        return s.slice(left+1,right);
    }
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i,i); // 奇数
        expandAroundCenter(i,i+1); // 偶数
    }
    return s.slice(start,start+maxLen);
}
console.log(longestPalindrome('babad'));