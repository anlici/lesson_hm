// 栈
function flat(arr) {
    const res = [];
    const stack = [...arr];
    while(stack.length) {
        const item = stack.pop();
        if(Array.isArray(item)) {
            stack.push(...item);
        } else {
            res.push(item);
        }
    }
    return res.reverse();
}
function flat2(arr) {
    let res = [];
    for(const item of arr) {
        res = res.concat(Array.isArray(item) ? flat2(item) : item);
    }
    return res;
}
function flat3(arr) {
    return arr.flat(Infinity);
}
console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, 9]]]));
console.log(flat2([1, 2, 3, [[7, 8, 9]]]));
console.log(flat3([1, 2, 3, [4,[5,[6,[7, 8, 9]]]]]));