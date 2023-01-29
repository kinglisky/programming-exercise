/**
 * 给定一个非空二叉树，返回其最大路径和。

本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。

示例 1:

输入: [1,2,3]

       1
      / \
     2   3

输出: 6
示例 2:

输入: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

输出: 42

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-maximum-path-sum
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
var maxPathSum = function(root) {
    let max = -Number.MAX_SAFE_INTEGER;
    const dfs = (node) => {
        if (!node) {
            return 0;
        }
        const { left, right, val } = node;
        const lv = Math.max(dfs(left), 0);
        const rv = Math.max(dfs(right), 0);
        max = Math.max(max, val + lv + rv);
        console.log();
        return val + Math.max(lv, rv);
    }
    dfs(root);
    return max;
};

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// console.log(maxPathSum({
//     val: -10,
//     left: {
//         val: 9,
//         left: null,
//         right: null,
//     },
//     right: {
//         val: 20,
//         left: {
//             val: 15,
//             left: null,
//             right: null,
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null,
//         },
//     },
// }));

console.log(maxPathSum({
    val: -3,
    left: null,
    right: null,
}));