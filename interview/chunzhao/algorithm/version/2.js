
function invertTree(root) {
    if(root === null) return root;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    if(root.left === null && root.right === null) return root;

    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    
    return root;
}