/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) return [];
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    let res = map[digits[0]].slice();
    for (let i = 1; i < digits.length; i++) {
        res = map[digits[i]].reduce((list, k) => {
            return list.concat(res.map(s => s + k));
        }, [])
    }
    return res;
};

console.log(letterCombinations('23'));