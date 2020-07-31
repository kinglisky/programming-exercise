/* 
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
var nodes1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1].map((val) => ({ val, next: null }));

var nodes2 = [5, 6, 4].map((val) => ({ val, next: null }));

[nodes1, nodes2].forEach((nodes) => {
    nodes.forEach((node, i) => {
        node.next = nodes[i + 1] || null;
    });
});

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    function def(node, arr = []) {
        if (!node) {
            return arr;
        }
        arr.push(node.val);
        return def(node.next, arr);
    }

    const arr1 = def(l1);
    const arr2 = def(l2);
    const list = [];
    console.log(arr1);
    console.log(arr2);
    const len = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
        if (!list[i]) {
            list[i] = {
                val: 0,
                next: null,
            };
        }
        const sum = (arr1[i] || 0) + (arr2[i] || 0) + list[i].val;
        list[i].val = sum % 10;
        const next = sum / 10 | 0;
        if (next) {
            list[i + 1] = {
                val: next,
                next: null,
            };
            list[i].next = list[i + 1];
        }
        if (list[i - 1]) {
            list[i - 1].next = list[i];
        }
    }
    return list[0];
};

// console.log(addTwoNumbers(nodes1[0], nodes2[0]));
// console.log(addTwoNumbers({ val: 0, next: null }, { val: 0, next: null }));
console.log(addTwoNumbers({ val: 5, next: null }, { val: 5, next: null }));