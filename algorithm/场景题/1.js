const scores = [10,92,67,13,89,56,78,90,100];
// 大于5的数，array es6新增的方法
// const hasHighScore = a => a > 5;
const hasHighScore = scores.some(a => a > 89);
console.log(hasHighScore); // true
const hasLowScore = scores.every(a => a < 100);

const hasEventNumber = scores.some(a => a % 2 === 0); //奇数


