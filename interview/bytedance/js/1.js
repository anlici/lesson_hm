// function foo() {
//     var a = 1;
//     let b = 2;
//     let d;
//     {
//       let b = 3;
//       var c = 4;
//       let d = 5;
//       console.log(a);
//       console.log(b)  
//     }
//     console.log(b)
//     console.log(c)
//     console.log(d)
//   }
//   foo();


function bar() {
    console.log(myname);
}
function foo() {
    var myname = 'john'
    bar()
    console.log(myname);
}
var myname = 'lisa'
foo();
