/**
 * 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回它的最小深度  2.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    function dfs(node, count = 0) {
        if (!node) {
            return count;
        }
        count += 1;
        if (node.left && node.right) {
            return Math.min(dfs(node.left, count), dfs(node.right, count));
        }

        const next = node.left || node.right;
        return next ? dfs(next, count) : count;
    }
    return dfs(root);
};
const t1 = {
    "val": 3,
    "left": {
        "val": 9,
        "left": null,
        "right": null
    },
    "right": {
        "val": 20,
        "left": {
            "val": 15,
            "left": null,
            "right": null
        },
        "right": {
            "val": 7,
            "left": null,
            "right": null
        }
    }
};

const t2 = {
    "val": 1,
    "left": {
        "val": 2,
        "left": null,
        "right": null
    },
    "right": null
};
console.log(minDepth(t1));