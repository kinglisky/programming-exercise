/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let rs = '';
    let ts = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            ts = s[i] + ts;
        } else {
            if (ts) {
                rs += ts;
                ts = '';
            }
            rs += ' ';
        }
    }
    return rs + ts;
};

console.log(reverseWords(`Let's take LeetCode contest`));