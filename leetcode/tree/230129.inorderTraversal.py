# Ref: https://leetcode.cn/problems/binary-tree-inorder-traversal/
# Definition for a binary tree node.

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def inorderTraversal(self, root):
        if not root:
            return [];

        res = [];

        if root.left:
            res = res + self.inorderTraversal(root.left)

        res.append(root.val)

        if root.right:
           res = res + self.inorderTraversal(root.right)

        return res


sol = Solution()
res = sol.inorderTraversal(TreeNode(1, None, TreeNode(2, TreeNode(3, None, None), None)))
print(res)

# 优解
# https://leetcode.cn/problems/binary-tree-inorder-traversal/solutions/25220/yan-se-biao-ji-fa-yi-chong-tong-yong-qie-jian-ming/?languageTags=python3%2Cpython

class Solution:
    def inorderTraversal(self, root):
        WHITE, GRAY = 0, 1
        res = []
        stack = [(WHITE, root)]
        while stack:
            color, node = stack.pop()
            if node is None: continue
            if color == WHITE:
                stack.append((WHITE, node.right))
                stack.append((GRAY, node))
                stack.append((WHITE, node.left))
            else:
                res.append(node.val)
        return res

