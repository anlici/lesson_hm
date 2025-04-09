const obj1 = {a:1,b:2,c:3}
const obj2 = {a:1,b:5,c:4}

function diff(obj1,obj2) {
    const res = {};
    const keys = new Set([...Object.keys(obj1),...Object.keys(obj2)])
    for(let key of keys) {
        if(obj1[key] !== obj2[key]) {
            res[key] = {
                oldValue: obj1[key],
                newValue: obj2[key]
            }
        }
    }
    return res;
}

console.log(diff(obj1,obj2))
