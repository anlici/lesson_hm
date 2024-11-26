function generateRandomTime () {
    const date = new Date();//内置执行对象
    let hour = date.setHours(Math.floor(Math.random() * 24));
    let minute = date.setMinutes(Math.floor(Math.random() * 60));
    let second = date.setSeconds(Math.floor(Math.random() * 60));
    // return year + ":" + minute + ":" + second;
    return date.toISOString();
}
console.log(generateRandomTime());