/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s) return true;
    if (s.length % 2 !== 0) return false;
    const map = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    const data = [s[0]];
    for (let i = 1; i < s.length; i++) {
        const v = s[i];
        if (map[v] && map[v] === data[data.length - 1]) {
            data.pop();
        } else {
            data.push(v);
        }
    }
    return !data.length;
};

console.log(isValid('{[]}'));
console.log(isValid('([)]'));
console.log(isValid('{}()[]'));
