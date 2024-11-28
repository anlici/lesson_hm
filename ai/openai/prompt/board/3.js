function bar() {
    console.log(myname)     //lisi
  }
  function foo() {
    var myname = 'zhangsan'
    
    console.log(myname)      //zhangsan
  }
  var myname = 'lisi'
  foo()
  bar()