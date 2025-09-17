// bfs [ 1, 2, 3, 4, 5, 6 ] 层序
function treeToList(node) {
    const list = [];
    const queue = [node];
    while(queue.length) {
        const item = queue.shift();
        list.push(item.val);
        if(item.children) {
            queue.push(...item.children);
        }
    }
    return list;
}

// dfs [ 1, 2, 4, 5, 3, 6 ] 前序
function treeToList2(node) {
    const list = [];
    function dfs(node) {
        if(!node) return;
        list.push(node.val);
        if(node.children) {
            for(let child of node.children) {
                dfs(child); // 父亲到子
            }
        }
    }
    dfs(node);
    return list;
}
const tree = {
    val: 1,
    children: [
        {
            val: 2,
            children: [
                { val: 4, children: [] },
                { val: 5, children: [] }
            ]
        },
        {
            val: 3,
            children: [
                { val: 6, children: [] }
            ]
        }
    ]
};
console.log(treeToList(tree));
console.log(treeToList2(tree));