/**
 * https://leetcode-cn.com/problems/binary-tree-paths/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) {
        return [];
    }
    const res = [];
    function dfs(node, parent = '') {
        if (!node.left && !node.right) {
            res.push(`${parent}${node.val}`);
            return;
        }
        if (node.left) {
            dfs(node.left, `${parent}${node.val}->`);
        }
        if (node.right) {
            dfs(node.right, `${parent}${node.val}->`)
        }
    }
    dfs(root);
    return res;
};

const tree = {
    "val": 1,
    "left": {
        "val": 2,
        "left": null,
        "right": {
            "val": 5,
            "left": null,
            "right": null
        }
    },
    "right": {
        "val": 3,
        "left": null,
        "right": null
    }
}

console.log(binaryTreePaths(tree));