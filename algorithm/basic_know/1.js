// x 的n次方
function fun1(x,n) {
    if(n == 0) return 1;
    if(n < 1) {
        x = 1/x;
        n = -n;
    }
    let res = 1;
    while(n>0) {
        if(n%2 == 1) {
            res *=x;
        } 
        x *= x;
        n = Math.floor(n/2);
    }
    return res;
}
function fun2(x,n) {
    if(n == 0) return 1;
    let t = fun2(x,Math.floor(n/2));
    if(n%2 == 1) {
        return t*t*x;
    }else {
        return t*t;
    }
}
console.log(fun1(2,30));
console.log(fun2(2,30));


