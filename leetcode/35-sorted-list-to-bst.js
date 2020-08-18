/**
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = (head) => {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    const buildBST = (start, end) => {
        if (start > end) return null;
        const mid = (start + end) / 2 | 0; // 不会数值溢出的，Java的binarySearch源码也这么写
        const root = new TreeNode(arr[mid]);
        root.left = buildBST(start, mid - 1);
        root.right = buildBST(mid + 1, end);
        return root;
    };

    return buildBST(0, arr.length - 1);
};

const nodes = [-10, -3, 0, 5, 9].map(val => ({ val, next: null }))
nodes.forEach((node, index) => {
    if (nodes[index + 1]) {
        node.next = nodes[index + 1];
    }
});

console.log(sortedListToBST(nodes[0]));