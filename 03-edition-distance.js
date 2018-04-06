// 最小编辑问题
// https://github.com/youngwind/blog/issues/106
// http://qinxuye.me/article/get-edit-distance-by-dynamic-programming/

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

/**
 * 动态规划算法
 * @param {string} a
 * @param {string} b
 * @returns {number} 从 a → b 的最小编辑距离
 */
function dynamicPlanning (a, b) {
  let lenA = a.length
  let lenB = b.length
  let d = []
  d[0] = []

  // 构建二维矩阵
  for (let j = 0; j <= lenB; j++) {
    d[0].push(j)
  }

  // 构建二维矩阵
  for (let i = 0; i <= lenA; i++) {
    if (d[i]) {
      d[i][0] = i
    } else {
      d[i] = []
      d[i][0] = i
    }
  }

  // 规划最短距离
  for (let i = 1; i <= lenA; i++) {
    for (let j = 1; j <= lenB; j++) {
      if (a[i - 1] === b[j - 1]) {
        d[i][j] = d[i - 1][j - 1]
      } else {
        let m1 = d[i - 1][j] + 1
        let m2 = d[i][j - 1] + 1
        let m3 = d[i - 1][j - 1] + 1
        d[i][j] = Math.min(m1, m2, m3)
      }
    }
  }

  return d[lenA][lenB]
}

const c = 'time for'
const d = 'for'
console.log(`c: ${c}\nd: ${d}`)
console.log('edition distance: ', dynamicPlanning(c, d))