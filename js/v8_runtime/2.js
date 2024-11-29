function foo() {
    var a = 1;
    let b = 2;
    // 块级作用域 生命周期
    
    {
      let b = 3;
      var c = 4;
      let d = 5;
      console.log(a);
      console.log(b)  
    }
    console.log(b)
    // 全局var 词法环境有c
    console.log(c)
    // 局部let 词法环境没有d
    console.log(d)
  }
  foo()