/**
 * https://leetcode-cn.com/problems/word-search/
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const head = word[0];
    const points = [];
    const length = word.length;
    board.forEach((data, i) => {
        data.forEach((it, j) => {
            if (it === head) {
                points.push([i, j]);
            }
        });
    });
    let result = false;
    function check(r, c, i = 0) {
        if (board[r][c] === word[i]) {
            console.log(word[i], i);
            if (i === length - 1) {
                result = true;
            }
            [
                [r - 1, c],
                [r + 1, c],
                [r, c - 1],
                [r, c + 1],
            ].some(([tr, tc]) => {
                const ok = tr >= 0 && tr < board.length && tc >= 0 && tc < board[0].length;
                return ok && check(tr, tc, i + 1);
            });
        }
        return result;
    }
    return points.some(([r, c]) => check(r, c));
};

var board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

// console.log(exist(board, 'ABCCED'));
// console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));