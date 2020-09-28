/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
 /**
 * @param {string} s
 * @return {string}
 */
// 扩展中心
var longestPalindrome = function(s) {
    let ans = '';
     let n = s.length;
     let dp = Array.from(new Array(n), () => new Array().fill(0));
     for(let i = n-1; i >=0; i--) {
         for(let j = i; j < n; j++) {
             dp[i][j] = s[i] === s[j] && ( j - i < 2 || dp[i+1][j-1])
             if(dp[i][j] && j - i + 1 > ans.length) {
                 ans = s.substr(i,j - i + 1);
             }
         }
     }
     return ans;
 }

console.log(longestPalindrome("babad"));