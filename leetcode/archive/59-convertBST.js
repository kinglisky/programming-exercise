/**
 * https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
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
const convertBST = (root) => {
    let sum = 0;
    const inOrder = (root) => {
        if (root == null) {  // 遍历到null节点，开始返回
            return;
        }
        inOrder(root.right); // 先进入右子树

        sum += root.val;     // 节点值累加给sum
        root.val = sum;      // 累加的结果，赋给root.val

        inOrder(root.left);  // 然后才进入左子树
    };
    inOrder(root); // 递归的入口，从根节点开始
    return root;
}


var tree = {
    "val": 2,
    "left": {
        "val": 0,
        "left": {
            "val": -4,
            "left": null,
            "right": null
        },
        "right": {
            "val": 1,
            "left": null,
            "right": null
        }
    },
    "right": {
        "val": 3,
        "left": null,
        "right": null
    }
};

console.log(convertBST(tree));