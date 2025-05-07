// 最长递增子序列
var lengthOfLIS = function(nums) {
    if (nums.length <= 1) return nums; // 如果数组长度小于等于1，直接返回数组本身

    let n = nums.length;
    let dp = new Array(n).fill(1); // 初始化动态规划数组
    let prev = new Array(n).fill(-1); // 初始化前驱指针数组
    let maxLen = 1;
    let endIndex = 0;// 结束索引

    for(let i=1;i<n;i++) {
        for(let j=0;j<i;j++) {
            if(nums[i] > nums[j] && dp[i] < dp[j]+1) {
                dp[i] = dp[j]+1; // 更新数组
                prev[i] = j;
            }
        }
        if(dp[i] > maxLen) {
            maxLen = dp[i];
            endIndex = i;
        }
    }

    let lis = [];
    let cur = endIndex;
    // 利用prev 回溯
    while(cur !== -1) {
        lis.unshift(nums[cur]);
        cur = prev[cur];
    }

    return lis;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 输出：[2, 3, 7, 18]
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 输出：[0, 1, 2, 3]
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 输出：[7]