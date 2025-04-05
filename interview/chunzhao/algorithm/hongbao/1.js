function hongbao(total, num) {
    const arr = [];
    let restAmount = total;
    let restNum = num;
    for(let i = 0; i < num-1; i++) {
        let amount = parseFloat(
            Math.random() * (restAmount / restNum * 2 - 0) // 二倍均值算法
        ).toFixed(2);
        restAmount -= amount;
        restNum--;
        arr.push(amount);
        
    }
    arr.push(restAmount.toFixed(2));
    
    return arr;
}
// hongbao(100,3)
console.log(hongbao(100,6));
