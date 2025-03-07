// 1. 根据type 过滤出数组
// function filterByType(arr,type) {
    
//     return arr.filter(item => {
//         const itemType = typeof item; // 类型
//         if (type === 'object') {
//             return item !== null && itemType === type && !Array.isArray(item);
//         } else if (type === 'array') {
//             return Array.isArray(item);
//         }
//         return itemType === type; // 函数 简单数据
//     })
// }
function filterByType(arr,type) {
    isObject = (item) => {
        return typeof item === 'object' && item !== null && !Array.isArray(item);
    }
    return arr.filter(item => {
        if(type === 'object') {
            return isObject(item)
        } else{
            return typeof item === type;
        }
    })
}
const inputArray = [1, 'hello', { key: 'value' }, [1, 2, 3], null, undefined, true, { anotherKey: 'anotherValue' }];
console.log(filterByType(inputArray, 'object'));
 
