class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// 辅助函数：将数组转换为二叉树
const arrayToTree = (arr) => {
    if (!arr.length) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const currentNode = queue.shift();

        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }

    return root;
}

// 迭代前序遍历
const preOrder = (root) => {
    if (!root) return [];
    let res = [];
    let stack = [root];

    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);

        // 注意：先压右子节点，再压左子节点，以保证左子节点先被访问
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return res;
}

// 测试代码
const arr = [1, 2, 3, 4, 5, 6, 7];
const treeRoot = arrayToTree(arr);
console.log(preOrder(treeRoot)); // 输出: [1, 2, 4, 5, 3, 6, 7]