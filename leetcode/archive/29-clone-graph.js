/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * https://leetcode-cn.com/problems/clone-graph/
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (node == null) return null;
    const map = {};
    function dfs(node) {
        if (map[node.val]) return;
        map[node.val] = [];
        node.neighbors.forEach(n => {
            map[node.val].push(n.val);
            dfs(n);
        });
    }
    dfs(node);
    let targetIndex = null;
    const nodesMap = {};
    const nodes = Object.entries(map).map(([val, neighbors], index) => {
        if (Number(val) === node.val) {
            targetIndex = index;
        }
        nodesMap[val] = {
            val: Number(val),
            neighbors,
        };
        return nodesMap[val];
    });
    nodes.forEach(item => {
        item.neighbors = item.neighbors.map(v => nodesMap[v])
    });

    return nodes[targetIndex];
};

var nodes = [1, 2, 3, 4].map((val) => {
    return { val, neighbors: [] };
});
var len = nodes.length;
nodes.forEach((node, i) => {
    const prev = (len + i - 1) % 4;
    const next = (len + i + 1) % 4;
    node.neighbors = [nodes[prev], nodes[next]];
});

// console.log(cloneGraph(nodes[2]));
console.log(cloneGraph({ val: 1, neighbors: [] }));