/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    function dfs(node) {
        if (!node) {
            return [];
        }
        const arr = [node];
        if (node.left) {
            arr.unshift(...dfs(node.left));
        }
        if (node.right) {
            arr.push(...dfs(node.right));
        }
        return arr;
    }
    // 遍历二叉树输出 node 节点数组
    const nodes = dfs(root);
    // 对数组进行排序
    const sortNodes = nodes.slice(0).sort((a, b) => a.val - b.val);
    // 判断的排序后同个位置节点如果不相同，则是需要交换的节点
    nodes.some((node, i) => {
        const switchNode = sortNodes[i];
        // 交换两个节点的值
        if (node !== switchNode) {
            const nodeVal = node.val;
            node.val = switchNode.val;
            switchNode.val = nodeVal;
            return true;
        }
        return false;
    });
};

console.log(recoverTree({
    "val": 3,
    "left": {
        "val": 1,
        "left": null,
        "right": null
    },
    "right": {
        "val": 4,
        "left": {
            "val": 2,
            "left": null,
            "right": null
        },
        "right": null
    }
}));