/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。

 

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/restore-ip-addresses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = (s) => {
    const res = [];
    const dfs = (subRes, start) => {                 // 复原从start开始的子串
        if (subRes.length == 4 && start == s.length) { // 满4段，且用光所有字符
            res.push(subRes.join('.'));                  // 4段拼成字符串 推入结果数组
            return;                                      // 返不返回都行，指针已经到头了，严谨的说还是返回吧
        }
        if (subRes.length == 4 && start < s.length)    // 满4段，但还没用光字符,直接返回
            return;
        for (let len = 1; len <= 3; len++) {           // 三种长度的选择
            if (start + len - 1 >= s.length) return;     // 指针超出边界了
            if (len != 1 && s[start] == '0') return;     // 不能是0x、0xx
            const str = s.substring(start, start + len); // 当前选择切出的片段
            if (len == 3 && +str > 255) return;          // 不能超过255
            subRes.push(str);                            // 作出选择
            dfs(subRes, start + len);                    // 基于这种选择，向下选择
            subRes.pop();                                // 撤销最后的选择，回到之前的状态
        }
    };
    dfs([], 0);                                      // dfs入口
    return res;
};
console.log(restoreIpAddresses('25525511135'));