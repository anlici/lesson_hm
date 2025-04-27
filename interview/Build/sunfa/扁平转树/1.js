const flatArr = [
    { id: '01', parentId: 0, name: '节点1' },
    { id: '011', parentId: '01', name: '节点1-1' },
    { id: '0111', parentId: '011', name: '节点1-1-1' },
    { id: '02', parentId: 0, name: '节点2' },
    { id: '022', parentId: '02', name: '节点2-2' },
    { id: '023', parentId: '02', name: '节点2-3' },
    { id: '0222', parentId: '022', name: '节点2-2-2' },
    { id: '03', parentId: 0, name: '节点3' },
  ]
function getTreeData(arr,parentId) { 
    function loop(parentId) {
    //    return arr.filter(item => item.parentId === parentId).map(item => {
    //        return {
    //            ...item,
    //            children: loop(item.id)
    //        }
    //    })
        return arr.reduce((prev,cur) => {
            if(cur.parentId === parentId) {
                cur.children = loop(cur.id)
                prev.push(cur)
            }
            return prev;  
        },[]);
    }
    return loop(parentId)
}

// function getTreeData(arr,parentId) {
    
//     const map = {}; // 映射表，
//     arr.forEach(item => {
//         map[item.id] = {item,children:[] };
//     });
//     const result = [];
//     arr.forEach(item => {
//         const node = map[item.id];
//         if(item.parentId === parentId) {
//             result.push(node) 
//         } else {
//             const parent = map[item.parentId];
//             if(parent) {
//                 parent.children.push(node)
//             }
//         }
//     });
//     return result;
// }
const result = getTreeData(flatArr,0)
console.log('dddd',result)