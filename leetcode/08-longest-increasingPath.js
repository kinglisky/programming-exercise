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
    const cache = {};
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            cache[`${i}${j}`] = {};
        }
    }

    function update(target) {
        Object.keys(target).forEach(key => {
            Object.keys(cache[key]).forEach(k => {
                cache[key][k] += 1;
            });
            update(cache[key]);
        });
    }

    function map(ix, iy) {
        const key = `${ix}${iy}`;
        [
            { x: ix - 1, y: iy },
            { x: ix + 1, y: iy },
            { x: ix, y: iy - 1 },
            { x: ix, y: iy + 1 },
        ].filter(p => {
            const tv = matrix[p.x] && matrix[p.x][p.y];
            return tv != null && tv < matrix[ix][iy];
        }).forEach(p => {
            const ck = `${p.x}${p.y}`;
            cache[ck][key] = 1;
            update(cache[ck]);
        });
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            map(i, j);
        }
    }

    console.log(JSON.stringify(cache));
};

console.log(longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
]));