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