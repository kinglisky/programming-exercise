/**
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    const res = [];
    while (queue.length) {
        const level = [];
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            level.push(queue[i].val);
            if (queue[i].left) {
                newQueue.push(queue[i].left);
            }
            if (queue[i].right) {
                newQueue.push(queue[i].right);
            }
        }
        res.unshift(level);
        queue = newQueue;
    }
    return res;
};

var tree = {
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

console.log(levelOrderBottom(tree));
