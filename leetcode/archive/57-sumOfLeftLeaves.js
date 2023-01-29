/**
 * https://leetcode-cn.com/problems/sum-of-left-leaves/
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
const sumOfLeftLeaves = (root) => {
    if (root == null) return 0;
    let sum = 0;
    const queue = [];
    queue.push(root);

    while (queue.length) {
        const cur = queue.shift();
        if (cur.left) {
            if (cur.left.left == null && cur.left.right == null) {
                sum += cur.left.val;
            } else {
                queue.push(cur.left);
            }
        }
        if (cur.right) {
            queue.push(cur.right);
        }
    }
    return sum;
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

console.log(sumOfLeftLeaves(tree));
