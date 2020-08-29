const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const data = [1, 2, 4];

function arrToTree(data) {
    const tree = {
        val: data.shift(),
        left: null,
        right: null,
    };
    const nodes = [tree];
    while (data.length) {
        const node = nodes.shift();
        const leftVal = data.shift();
        if (leftVal != null) {
            node.left = {
                val: leftVal,
                left: null,
                right: null,
            };
            nodes.push(node.left);
        }
        const rightVal = data.shift();
        if (rightVal != null) {
            node.right = {
                val: rightVal,
                left: null,
                right: null,
            };
            nodes.push(node.right);
        }
    }
    return tree;
}

(async function main() {
    const tree = arrToTree(data);
    await writeFile('tree.json', JSON.stringify(tree, null, 4), 'utf-8');
})();