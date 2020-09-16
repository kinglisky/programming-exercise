/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const queue = [root];
    const res = [];
    while (queue.length) {
        const node = queue.shift();
        res.push(node.val);
        if (node.left) {
            queue.unshift(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return res;
};

const tree = {
    "val": 1,
    "left": null,
    "right": {
        "val": 2,
        "left": {
            "val": 3,
            "left": null,
            "right": null
        },
        "right": null
    }
};


console.log(inorderTraversal(tree));