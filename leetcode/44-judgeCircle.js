/**
 * https://leetcode-cn.com/problems/robot-return-to-origin/
 * 
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let v = 0;
    let h = 0;
    const handlers = {
      U: () => v += 1,
      D: () => v -= 1,
      L: () => h -= 1,
      R: () => h += 1,
    };
    for (let i = 0; i < moves.length; i++) {
      handlers[moves[i]]();
    }
    return !v && !h;
  };
  
  console.log(judgeCircle('UD'));
  console.log(judgeCircle('LLR'));
  