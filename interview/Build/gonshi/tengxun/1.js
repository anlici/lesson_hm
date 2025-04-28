var lengthOfLIS = function(nums) {
    if (nums.length <= 1) return nums; // 如果数组长度小于等于1，直接返回数组本身

    let n = nums.length;
    let dp = new Array(n).fill(1); // 初始化动态规划数组
    let prev = new Array(n).fill(-1); // 初始化前驱指针数组

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1; // 更新dp[i]
                prev[i] = j; // 更新前驱指针
            }
        }
    }

    // 找到最长递增子序列的最后一个元素的索引
    let maxIndex = 0;
    for (let i = 1; i < n; i++) {
        if (dp[i] > dp[maxIndex]) {
            maxIndex = i;
        }
    }

    // 通过前驱指针回溯，构造最长递增子序列
    let lis = [];
    while (maxIndex !== -1) {
        lis.push(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }

    // 由于是从后往前构造的，需要反转
    return lis.reverse();
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 输出：[2, 3, 7, 18]
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 输出：[0, 1, 2, 3]
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 输出：[7]