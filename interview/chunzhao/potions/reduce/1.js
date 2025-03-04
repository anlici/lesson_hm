// reduce 将前面计算的值作为下一次迭代的初始值，
const str = 'hello'

// function reverseStr(str) {
//     return [...str].map(char => char).reverse().join('')
// }

// function reverseStr(str) {
//     let reversed = '';
//     for(const char of str) {
//         reversed = char + reversed;
//     }// 逐个翻转
//     return reversed;
// }

function reverseStr3(str) {
    // 正则
    return str.replace(/./g)
}