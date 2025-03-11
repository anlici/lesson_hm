// 数组 扁平化 采用非递归，使用栈
const arr = [1,2,[3,4,[5,6]]];
const flatter = (arr) => {
    let stack = [...arr]; // 拷贝数组
    let res = [];
    while(stack.length) {
        let item = stack.pop(); // 弹出栈顶元素
        // 数组 继续入栈
        if(Array.isArray(item)) {
            stack.push(...item)
        } else {
            res.push(item); // 非数组
        }
    }
    // 翻转
    return res.reverse();
}
console.log(flatter(arr));