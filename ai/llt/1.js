// js内置math对象，[0-1]

// console.log(Math.random());
function getRandom() {
   
    // return Math.random() < 0.5? "boy" : "girl";
    const arr = ["boy", "girl"];
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log(getRandom());

