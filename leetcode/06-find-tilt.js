/**
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
var findTilt = function(root) {
    let res = 0

    const dfs = (root) => {
        if (!root) return 0
        const left = dfs(root.left)
        const right = dfs(root.right)
        res += Math.abs(left - right)
        return root.val + left + right
    }
    dfs(root)

    return res
};

console.log(findTilt({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: {
        val: 3,
        left: null,
        right: null,
    },
}));