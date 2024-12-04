function foo(el) {
    console.log(el,this.id);
    
}
var obj = {
    id: 'awesome'
}
var ary = [1,2,3]
ary.forEach(foo,obj)