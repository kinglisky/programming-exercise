/**
 * https://leetcode-cn.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [];
    const data = Array.from({ length: n }).map((_, i) => i + 1);
    function help(source, arr = []) {
        if (arr.length === k) {
            res.push(arr);
        }
        for (let i = 0; i < source.length; i++) {
            help(source.slice(i + 1), [...arr, source[i]]);
        }
    }
    help(data);
    return res;
};

console.log(combine(4, 3));