// 版本号比较
// var arr = ['0.1.1', '2.3.3', '0.3002.1', '4.2', '4.3.5', '4.3.4.5']
function banben(verson1,verson2) {
    const v1 = verson1.split('.').map(Number);
    const v2 = verson2.split('.').map(Number);
    const maxLen = Math.max(v1.length,v2.length);
    for(let i=0;i<maxLen;i++) {
        let v1Num = v1[i] || 0;
        let v2Num = v2[i] || 0;
        if(v1Num>v2Num) {
            return 1; 
        } else if(v1Num<v2Num) {
            return -1; 
        }
    }
    return 0;
}

// 模板字符串,with 实现
function compile(template,data) {
    const reg = template.replace(
        /{{(.*?)}}/g,
        (match,key) => {
            return `data.${key.trim()}`;
        }
    )
    const fn = new Function('data',
        `with(data) {
            return \`${reg}\`;
        }`
    )
    // with(data) 支持动态解析嵌套对象，但是可能会导致性能问题（不会进行js优化，而且不值得变量实际来源，改变作用域链）
    
    return fn(data); 
}
const template =
  "Hello, {{user.name}}! Your balance is ${user.balance}. You have ${user.items[0]} in your cart. and ${user.items[2].kk}";
const exprObj = {
  user: {
    name: "Alice",
    balance: 100.5,
    items: ["Item1", "Item2", { kk: 1 }],
  },
};
const compiledString = compile(template, exprObj);
// console.log(compiledString);


// var ul = document.querySelector('ul');
// ul.addEventListener('click',function(e){
//   console.log(this);
//   console.log(e.target);
// })

for(var i=0;i<3;i++) {
    // (function(i){
    //     setTimeout(function(){
    //         console.log(i);
    //     },0)
    // })(i); // i 0 1 2

    // setTimeout(function(i){
    //     console.log(i);
    // }.bind(null,i),0);

    setTimeout((i) => {
        console.log(i);
    },0,i); // 第三个参数
}