/**
 * https://leetcode-cn.com/problems/keys-and-rooms/
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const cache = Array.from({ length: rooms.length }, () => 0);
    function dfs(index = 0) {
        if (cache[index]) {
            return;
        }
        cache[index] = 1;
        rooms[index].forEach(roomIndex => {
            dfs(roomIndex);
        });
    }
    dfs(0);
    return cache.every(v => v);
};

console.log(canVisitAllRooms([[1],[2],[3],[]]));
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));