
// 编写函数，[1,2,3,4,5,6,7,8,9,0] 输出 "(123） 456-7890"

// 思路： 先把数组变成字符串，然后用正则匹配，然后用replace替换成想要的格式
// 1. 先把数组变成字符串
let arr = [1,2,3,4,5,6,7,8,9,0];


function getPhoneNum(arr) {
   // let str = arr.join('');//1234567890 转成字符串
   //  return `array.join('')`; // 输出 array.join('')
    // 模版字符串es6  反引号  里面可以写变量  用$1  $2  $3  来表示匹配到的内容
    // 可读性更高
    //return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]})`;
    // 正则表达式  匹配三个数字  三个数字  四个数字
     // return "(" + str.replace(/(\d{3})(\d{3})(\d{4})/, "$1) $2-$3");
     // 机械的写法  不推荐
   // return "(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9];
    
}
console.log(getPhoneNum(arr));