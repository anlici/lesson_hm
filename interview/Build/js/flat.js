function flat(arr) {
    //return arr.flat(Infinity);
    let ans = [];
    for(let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i])) {
            ans = ans.concat(flat(arr[i]));
        } else {
            ans.push(arr[i]);
        }
    }
    return ans;
}