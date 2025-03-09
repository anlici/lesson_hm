const arrLike = {0:"A",1:"B",2:"C",length:3}
console.log(Array.prototype.slice.call(arrLike))
console.log(Array.prototype.slice.call(arrLike,1))

console.log(Array.prototype.slice.call(arrLike,1,2))
// rest
const arr = Array.from(arrLike);
console.log('arr:', arr);
[0, ...arr].forEach(v => {
    console.log(v);
});

// 0
// A
// B
// C