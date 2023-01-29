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
    const n = matrix[0] ? matrix[0].length : 0;
    const cache = Array.from({ length: m }, () => Array(n).fill(0));

    let max = 0;

    function dfs(r, c) {
        if (cache[r][c]) {
            return cache[r][c];
        }
        // 初始化当前的位置的值为 1
        cache[r][c] = 1;
        // 当前位置的上下左右位置坐标
        [
            [r - 1, c],
            [r + 1, c],
            [r, c - 1],
            [r, c + 1],
        ].forEach(([x, y]) => {
            const tv = matrix[x] && matrix[x][y];
            // 剔除掉边界情况
            if (tv != null && tv < matrix[r][c]) {
                // 遍历相邻的位置需要在路径值基础上 +1
                cache[r][c] = Math.max(cache[r][c], dfs(x, y) + 1);
            }
        });

        return cache[r][c];
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(max, dfs(i, j));
        }
    }

    return max;
};

console.log(longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
]));