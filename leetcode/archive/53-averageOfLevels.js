/**
 * https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (!root) {
        return [];
    }
    const res = [];
    let queue = [root];
    while (queue.length) {
        let sum = 0;
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            sum += queue[i].val;
            if (queue[i].left) {
                newQueue.push(queue[i].left);
            }
            if (queue[i].right) {
                newQueue.push(queue[i].right);
            }
        }
        res.push(sum / queue.length);
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
}

console.log(averageOfLevels(tree));