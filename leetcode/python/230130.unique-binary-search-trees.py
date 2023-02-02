# https://leetcode.cn/problems/unique-binary-search-trees/description/?languageTags=python%2Cpython3
# 二叉搜索树组合，DP 问题

class Solution:
    def numTrees(self, n):
        """
        :type n: int
        :rtype: int
        """
        G = [0]*(n+1)
        G[0], G[1] = 1, 1

        for i in range(2, n+1):
            for j in range(1, i+1):
                G[i] += G[j-1] * G[i-j]

        return G[n]
