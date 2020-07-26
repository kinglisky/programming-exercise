/**
 * @param {number[][]} matrix
 * @return {number}
 * 给定一个整数矩阵，找出最长递增路径的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。

示例 1:

输入: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
输出: 4 
解释: 最长递增路径为 [1, 2, 6, 9]。
示例 2:

输入: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
输出: 4 
解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var longestIncreasingPath = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const cache = Array.from({ length: m }).fill(Array.from({ length: n }).fill(0));
    console.log(cache)
    function upate(x, y) {
        if (cache[x][y]) {
            return cache[x][y];
        }
        const pos = [
            [x - 1, y],
            [x + 1, y],
            [x, y - 1],
            [x, y + 1],
        ];
        pos.forEach((tx, ty) => {
            const tv = matrix[tx, ty];
            if (tv != null && tv < matrix[x, y]) {
                cache[x][y] += upate(tx, ty);
            }
        });
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            upate(i, j);
        }
    }

    console.log(cache);
};

console.log(longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
]));