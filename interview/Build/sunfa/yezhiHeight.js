function getHeight(node,res) {
    if(!node) return -1; // 空节点高度为-1

    let cur = 1 + Math.max(getHeight(node.left,res) , getHeight(node.right,res));

    if(!res[cur]) {
        res[cur] = [];
    }
    res[cur].push(node.val);

    return cur;
}

function findLeaves(root) {
   const res = []; 
   getHeight(root,res);

   return res;
}

const tree = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4 },
        right: { val: 5 }
    },
    right: { val: 3 }
};

console.log(findLeaves(tree));
// 输出：[[4, 5, 3], [2], [1]]