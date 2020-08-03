/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const arr1 = num1.split('').reverse();
    const arr2 = num2.split('').reverse();
    const data = [];
    const len = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
        const v = (+ arr1[i] || 0) +  (+ arr2[i] || 0) + (data[i] || 0);
        data[i] = v % 10;
        next  =  v / 10 | 0;
        if (next) {
            data[i + 1] = next;
        }
    }
    return data.reverse().join('');
};

console.log(addStrings('100', '123'));