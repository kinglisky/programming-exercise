/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    return numbers.sort((a, b) => a - b)[0];
};

console.log(minArray([3,5,1,4,7]));