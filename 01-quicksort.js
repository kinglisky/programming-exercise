
/**
 * [quicksort description]
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 * 简单的快速排序算法实现
 */
function quicksort (arr) {
  if (arr.length < 2) return arr
  var pivot = arr[0]
  var less = []
  var greater = []
  /**
   * var pivot = arr[0]
   * arr.forEach ...
   * 这样是不行的会改变原数组
   */
  arr.slice(1).forEach(it => {
    if (it <= pivot) {
      less.push(it)
    } else {
      greater.push(it)
    }
  })
  return quicksort(less).concat(pivot).concat(quicksort(greater))
}

const arr = []
for (let i = 0; i < 10; i++) arr.push(Math.random() * 100 | 0)
console.log('origin:', arr)
console.log('sorted:', quicksort(arr))
