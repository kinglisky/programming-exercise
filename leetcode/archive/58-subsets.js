/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
    const res = [];
  
    const dfs = (index, list) => {
      if (index == nums.length) { // 指针越界
        res.push(list.slice());   // 加入解集
        return;                   // 结束当前的递归
      }
      list.push(nums[index]); // 选择这个元素
      dfs(index + 1, list);   // 往下递归
      list.pop();             // 递归结束，撤销选择
      dfs(index + 1, list);   // 不选这个元素，往下递归
    };
  
    dfs(0, []);
    return res;
  };

console.log(subsets([1, 2, 3]));