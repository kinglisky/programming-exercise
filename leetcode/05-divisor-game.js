/**
 * 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

选出任一 x，满足 0 < x < N 且 N % x == 0 。
用 N - x 替换黑板上的数字 N 。
如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/divisor-game
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    return (N - 1) % 2 !== 0;
};

console.log(divisorGame(4));

/**
 * 一个数可以被整除的数可能有很多，比如说 6 可以使 1 2 3，4 可以使 1，2，发现没有 1 是万能，那咱们就假设两人每次都是偷懒用 1 来做整除数据就好，那么判断这个数需要减去多少次才能到 1 （为 1 就到头了）

所以答案为：

var divisorGame = function(N) {
    return (N - 1) % 2 !== 0;
};

可以简化为：

var divisorGame = function(N) {
    return N % 2 === 0;
};

题目奇数次数为 true 所以 !== 0
 */