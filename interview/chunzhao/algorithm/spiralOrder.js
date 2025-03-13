function spiralOrder(matrix, n) {
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let res = []

    while(top <= bottom && left <= right) {
        for(let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        top++;// 下一行
        // 或 top > bottom break出来
        for(let i = top; i <= bottom;i++) {
            res.push(matrix[i][right])
        }
        right--;// 左边一列
        if(top <= bottom) {
            for(let i = right;i>=left;i--) {
                res.push(matrix[bottom][i])
            }
        }
        bottom--;// 上一行
        if(left <= right) {
            for(let i = bottom;i>=top;i--) {
                res.push(matrix[i][left])
            }
        }
        left++;// 右移动
    }
    return res;
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]],3))