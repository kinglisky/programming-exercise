/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let index = 0;
    let len = s.length / 2 | 0;
    let res = false;
    while (!res && index < len) {
        index += 1;
        res = s === s.substr(index) + s.substr(0, index);
    }
    return res;
};

console.log(repeatedSubstringPattern('a'));