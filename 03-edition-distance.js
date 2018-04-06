// 最小编辑问题
/**
 * 递归算法
 * @param {string} a
 * @param {string} b
 * @param {number} i 字符串 a 的长度
 * @param {number} j 字符串 b 的长度
 * @returns {number} 从 a → b 的最小编辑距离
 */
function recursion (a, b, i, j) {
  if (j === 0) return i
  if (i === 0) return j
  if (a[i - 1] === b[j - 1]) {
    return recursion(a, b, i - 1, j - 1)
  }
  let m1 = recursion(a, b, i - 1, j) + 1
  let m2 = recursion(a, b, i, j - 1) + 1
  let m3 = recursion(a, b, i - 1, j - 1) + 1
  return Math.min(m1, m2, m3)
}

const a = 'time for'
const b = 'for'
console.log(`a: ${a}\nb: ${b}`)
console.log('edition distance: ', recursion(a, b, a.length, b.length))
