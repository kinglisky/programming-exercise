/**
 * 给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
示例 2:

输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
示例 3:

输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/same-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function dfs(node, arr = []) {
        if (!node) {
            arr.push(null);
            return arr;
        };
        arr.push(node.val);
        dfs(node.left, arr);
        dfs(node.right, arr);
        return arr;
    }
    const v1 = dfs(p);
    const v2 = dfs(q);
    return v1.length === v2.length && v1.every((v, i) => {
        return v === v2[i];
    });
};

const t1 = {
    val: 1,
    left: {
        val: 1,
        left: null,
        right: null,
    },
    right: {
        val: 2,
        left: null,
        right: null,
    },
};

const t2 = {
    val: 1,
    left: {
        val: 1,
        left: null,
        right: null,
    },
    right: {
        val: 2,
        left: null,
        right: null,
    },
};

console.log(isSameTree(t1, t2));