const graph = {
  you: ['alice', 'bob', 'claire'],
  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny'],
  anuj: ['alice', 'jonny'],
  peggy: ['jonny'],
  thom: ['bob'],
  jonny: ['peggy']
}

/**
 * [广度优先算法]
 * @param {[type]} graph [图示]
 * @param {[type]} form  [起始]
 * @param {[type]} to    [终点]
 */
function BFS (graph, form, to) {
  const searchQueue = graph[form]
  const searched = []
  while (searchQueue.length) {
    const person = searchQueue.shift()
    if (searched.indexOf(person) === -1) {
      if (person === to) {
        return true
      }
      searchQueue.push(...graph[person])
      searched.push(person)
    }
  }
  return false
}

console.log('res:', BFS(graph, 'you', 'jonny'))
console.log('res:', BFS(graph, 'you', 'hhhh'))
