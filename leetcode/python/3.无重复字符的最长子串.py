#
# @lc app=leetcode.cn id=3 lang=python
#
# [3] 无重复字符的最长子串
#

# @lc code=start
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        l = len(s)

        if not l:
            return 0

        p1 = 0
        p2 = 0
        res = 0
        sub = []

        while p1 < l and p2 < l:
            curr = s[p2]
            if curr in sub:
                sub.pop(0)
                p1 += 1
            else:
                sub.append(curr)
                p2 += 1
            res = max(res, len(sub))

        return res

# @lc code=end
