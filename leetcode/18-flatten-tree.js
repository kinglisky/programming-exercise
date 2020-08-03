/**
 * 给定一个二叉树，原地将它展开为一个单链表。

 

例如，给定二叉树

    1
   / \
  2   5
 / \   \
3   4   6
将其展开为：

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    function def(node, arr = []) {
        if (!node) {
            return arr;
        }
        arr.push(node);
        def(node.left, arr);
        def(node.right, arr);
        return arr;
    }

    const nodes = def(root);
    nodes.forEach((node, i) => {
        if (nodes[i + 1]) {
            node.left = null;
            node.right = nodes[i + 1];
        }
    });
};

console.log(flatten({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: null,
            right: null,
        },
    },
    right: {
        val: 5,
        left: null,
        right: {
            val: 6,
            left: null,
            right: null,
        },
    }
}));