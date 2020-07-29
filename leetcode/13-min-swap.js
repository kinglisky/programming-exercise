/**
 * 我们有两个长度相等且不为空的整型数组 A 和 B 。

我们可以交换 A[i] 和 B[i] 的元素。注意这两个元素在各自的序列中应该处于相同的位置。

在交换过一些元素之后，数组 A 和 B 都应该是严格递增的（数组严格递增的条件仅为A[0] < A[1] < A[2] < ... < A[A.length - 1]）。

给定数组 A 和 B ，请返回使得两个数组均保持严格递增状态的最小交换次数。假设给定的输入总是有效的。

示例:
输入: A = [1,3,5,4], B = [1,2,3,7]
输出: 1
解释: 
交换 A[3] 和 B[3] 后，两个数组如下:
A = [1, 3, 5, 7] ， B = [1, 2, 3, 4]
两个数组均为严格递增的。
注意:

A, B 两个数组的长度总是相等的，且长度的范围为 [1, 1000]。
A[i], B[i] 均为 [0, 2000]区间内的整数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-swaps-to-make-sequences-increasing
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
    const len = A.length;
    const dp = new Array(len).fill().map(() => []);

    dp[0][0] = 0;
    dp[0][1] = 1;

    for (let i = 1; i < len; i++) {
        const a1 = A[i - 1];
        const a2 = A[i];
        const b1 = B[i - 1];
        const b2 = B[i];
        // 序列正常
        if (a1 < a2 && b1 < b2) {
            // 前后两位置都可以互换
            if (a1 < b2 && b1 < a2) {
                dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1]);
                dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + 1;
            } else {
                // 前后两位置需要一起换
                dp[i][0] = dp[i - 1][0]; 
                dp[i][1] = dp[i - 1][1] + 1;
            }
        } else {
            // 前个位置交换 OR 当前位置交互
            dp[i][0] = dp[i - 1][1] + 1;
            dp[i][1] = dp[i - 1][0] + 1;
        }
    }
    return Math.min(dp[len - 1][0], dp[len - 1][1]);
};

console.log(minSwap([1,3,5,4], [1,2,3,7]));