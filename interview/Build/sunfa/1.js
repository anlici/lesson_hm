// 最大公共前缀
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j);
        if (prefix === "") return "";
    }

    return prefix;
}

// 测试用例
const strs = ["flower", "flow", "floght"];
console.log(longestCommonPrefix(strs)); // 输出："fl"

// 最大子序列
// [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// currentSum 当前和
// maxSum 最大和 遍历，加入currentSum，如果currentSum > maxSum，则更新maxSum，否则继续遍历。
// 如果currentSum < 0，则重置currentSum = 0，重新开始计算。

// 重复子字符串 
// 输入：s = "abcabcbb"
// 输出：false 

console.log(-0 == +0);
console.log(-0 == -0);
console.log(Object.is(-0, +0));

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this,args)
        } else {
            return function(...args2) {
                return curried.apply(this,args.concat(args2));
            }
        }
    }
}
function add(a,b,c) {
    return a+b+c;
}
function currySum() {
    let args = [...arguments];
    let inner = function() {
        if(arguments.length === 0) {
            // 全部传入
            return args.reduce((a,b) => a+b,0);
        } else {
            // 继续传入
            args = [...args,...arguments];
            return inner;
        }
    }
    return inner;
}
const curriedAdd = currySum(1)(2);

console.log(curriedAdd()); // () 入口

