/**
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function dfs(node) {
        if (!node) return node;
        const { left, right } = node;
        node.right = dfs(left);
        node.left = dfs(right);
        return node;
    }
    return dfs(root);
};

const tree = {
    "val": 4,
    "left": {
        "val": 2,
        "left": {
            "val": 1,
            "left": null,
            "right": null
        },
        "right": {
            "val": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "val": 7,
        "left": {
            "val": 6,
            "left": null,
            "right": null
        },
        "right": {
            "val": 9,
            "left": null,
            "right": null
        }
    }
};

console.log(invertTree(tree));