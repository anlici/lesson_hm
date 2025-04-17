// const preh = (arr) => {
//     if(arr.length <= 1) return arr;

//     if(root) return root;
//     node.left && preh(node.left);
//     node.right && preh(node.right);
// }

const preh = (root) => {
    const res = [];
    const stack = [root];
    
    while(stack.length) {
        const node = stack.pop();
        if(node) {
            res.push(node.val);
            stack.push(node.right);
            stack.push(node.left);
        } 
    }
    return res.reverse();
} 
