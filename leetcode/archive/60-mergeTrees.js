/**
 * https://leetcode-cn.com/problems/merge-two-binary-trees/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {

};

const t1 = {
    "val": 1,
    "left": {
        "val": 3,
        "left": {
            "val": 5,
            "left": null,
            "right": null
        },
        "right": null
    },
    "right": {
        "val": 2,
        "left": null,
        "right": null
    }
};

const t2 = {
    "val": 2,
    "left": {
        "val": 1,
        "left": null,
        "right": {
            "val": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "val": 3,
        "left": null,
        "right": {
            "val": 7,
            "left": null,
            "right": null
        }
    }
};

console.log(mergeTrees(t1, t2));