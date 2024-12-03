const age = 18
const result1 = age || '有年龄'
const re = age && '有年龄'
const sex = ''
const result2 = sex || '没有性别'
console.log(result2,result1);
console.log(re);