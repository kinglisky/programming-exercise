# https://leetcode.cn/problems/two-sum/description/

class Solution(object):
    def twoSum(self, nums, target):
       
        map = {}
        for index, n in enumerate(nums):
            if target - n in map:
                return [map[target - n], index]
            map[n] = index

        return []

s = Solution()

print(s.twoSum([3,2,4], 6))