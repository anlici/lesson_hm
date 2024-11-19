let arr = [1,2,3,4,5,6,7,8,9,0];

function getPhoneNum(arr) {
    let format = "(###) ###-####";
    // 尽管是简单数据类型，但是有内置方法
    for(let i = 0 ;i<arr.length;++i) {
        format = format.replace("#",arr[i]);
    }
    return format;

}

console.log(getPhoneNum(arr));