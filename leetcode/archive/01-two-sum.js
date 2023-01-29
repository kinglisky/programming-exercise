/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = [];
    const map = {};
    nums.some((n, i) => {
        const prveIndex = map[target - n];
        if (prveIndex != null) {
            res = [prveIndex, i];
            return true;
        }
        map[n] = i;
        return false;
    });
    return res;
};

console.log(twoSum([2, 7, 11, 15], 9));