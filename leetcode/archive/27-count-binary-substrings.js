/**给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数。

示例 1 :

输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

请注意，一些重复出现的子串要计算它们出现的次数。

另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
示例 2 :

输入: "10101"
输出: 4
解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
注意：

s.length 在1到50,000之间。
s 只包含“0”或“1”字符。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-binary-substrings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * @param {string} s
 * @return {number}
 */
// var countBinarySubstrings = function(s) {
//     let count = 0;
//     let s1 = '01';
//     let s2 = '10';
//     while (s1 || s2) {
//         if (s1) {
//             const c1 = s.split(s1).length - 1;
//             s1 = c1 ? '0' + s1 + '1' : '';
//             count += c1;
//         }
//         if (s2) {
//             const c2 = s.split(s2).length - 1;
//             s2 = c2 ? '1' + s2 + '0' : '';
//             count += c2;
//         }
//     }
//     return count;
// };

var countBinarySubstrings = function(s) {
    const counts = [];
    let ptr = 0, n = s.length;
    while (ptr < n) {
        const c = s.charAt(ptr);
        let count = 0;
        while (ptr < n && s.charAt(ptr) === c) {
            ++ptr;
            ++count;
        }
        counts.push(count);
    }
    let ans = 0;
    for (let i = 1; i < counts.length; ++i) {
        ans += Math.min(counts[i], counts[i - 1]);
    }
    return ans;
};

console.log(countBinarySubstrings('00110011'));
console.log(countBinarySubstrings('10101'));