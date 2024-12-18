// amt 总jin
function coinChangeGreedy(coins,amt) {
    let len = coins.length-1;
    // sort(coins,greater); // 降序
    coins.sort((a,b) => a-b ) // 升序
    let count = 0; // 硬币数
    while(amt > 0) {
        if(amt >= coins[len] ) {
            amt -= coins[len];
            count++;
        } else {
            len--;
        }
    }
    return count;
}
// 面值为1、2和5的硬币来凑出11的金额
let result = coinChangeGreedy([1,2,5],11)
console.log(result)