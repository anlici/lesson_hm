var a = 1;
function fn(a) {
    var a = 2;
    var funA = function a() {};
    // 函数优先，
    var b = a;
    console.log(funA);
}
fn(3);
