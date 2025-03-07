// 列表转数字
// join 和 parseInt
const numArray = [1, 2, 3, 4, 5];
const num = parseInt(numArray.join(''))

// reduce 和字符串拼接
const num2 = numArray.reduce((acc,cur) => acc + cur,'')
console.log(typeof parseInt(num2));

let num3 = ''
// 循环拼接
for(let i = 0; i < numArray.length; i++) {
    num3 += numArray[i]
}
console.log(typeof parseInt(num3));

// 数字转列表
const numArray2 = 123456789
// split 和 Number、
const num4 = String(numArray2).split('').map(Number)
console.log(typeof num4);
const num5 = numArray2.toString().split('').map(Number)
console.log(typeof num5);

// 数字转字符串，再转列表
const num6 = Array.from(String(numArray2),Number) // 1,2,3,4,5,6,7,8,9
console.log(typeof num6);

const num7 = [...String(numArray2)].map(Number)
console.log(typeof num7)

