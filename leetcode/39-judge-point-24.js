/**
 * https://leetcode-cn.com/problems/24-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
    let res = false;
    function recursion(nums) {
        if (res) {
            return true;
        }
        if (nums.length === 1 && Math.abs(24 - nums[0]) < 0.000001) {
            return true;
        }
        const v1 = nums[0];
        const v2 = nums[1];
        const residue = nums.slice(2);

        res = recursion([v1 + v2, ...residue]);
        res = res || recursion([v1 - v2, ...residue]);
        res = res || recursion([v2 - v1, ...residue]);
        res = res || recursion([v1 * v2, ...residue]);
        if (v2 !== 0) {
            res = res || recursion([v1 / v2, ...residue]);
        }
        if (v1 !== 0) {
            res = res || recursion([v2 / v1, ...residue]);
        }
        return res;
    }
    return recursion(nums);
};

// console.log(judgePoint24([4, 1, 8, 7]));
console.log(judgePoint24([8, 4, 7, 1]));