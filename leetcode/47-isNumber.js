/**
 * https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    /* 有限状态自动机 */
    const STATE = { // 状态枚举
        START_SPACE: Symbol(),
        INT_SIGN: Symbol(),
        INT: Symbol(),
        INT_POINT: Symbol(),
        NO_INT_POINT: Symbol(),
        DECIMAL: Symbol(),
        EXP_LETTER: Symbol(),
        EXP_SIGN: Symbol(),
        EXP_INT: Symbol(),
        END_SPACE: Symbol(),
    }

    const CHAR_TYPE = { // 输入字符类型
        SPACE: Symbol(),
        EXP: Symbol(),
        NUMBER: Symbol(),
        POINT: Symbol(),
        SIGN: Symbol(),
        ILLEGAL: Symbol(),
    }

    const isCharType = (c) => { // 判断字符类型
        switch (c) {
            case '0': ; case '1': ; case '2': ; case '3': ; case '4': ; case '5': ; case '6': ; case '7': ; case '8': ; case '9': return CHAR_TYPE.NUMBER;
            case ' ': return CHAR_TYPE.SPACE;
            case 'e': ; case 'E': return CHAR_TYPE.EXP;
            case '.': return CHAR_TYPE.POINT;
            case '+': ; case '-': return CHAR_TYPE.SIGN;
            default: return CHAR_TYPE.ILLEGAL;
        }
    };

    const stateTransition = { // 状态转移
        [STATE.START_SPACE]: {
            [CHAR_TYPE.SPACE]: STATE.START_SPACE,
            [CHAR_TYPE.SIGN]: STATE.INT_SIGN,
            [CHAR_TYPE.NUMBER]: STATE.INT,
            [CHAR_TYPE.POINT]: STATE.NO_INT_POINT,
        },
        [STATE.INT_SIGN]: {
            [CHAR_TYPE.NUMBER]: STATE.INT,
            [CHAR_TYPE.POINT]: STATE.NO_INT_POINT,
        },
        [STATE.INT]: {
            [CHAR_TYPE.NUMBER]: STATE.INT,
            [CHAR_TYPE.POINT]: STATE.INT_POINT,
            [CHAR_TYPE.EXP]: STATE.EXP_LETTER,
            [CHAR_TYPE.SPACE]: STATE.END_SPACE,
        },
        [STATE.INT_POINT]: {
            [CHAR_TYPE.NUMBER]: STATE.DECIMAL,
            [CHAR_TYPE.EXP]: STATE.EXP_LETTER,
            [CHAR_TYPE.SPACE]: STATE.END_SPACE,
        },
        [STATE.NO_INT_POINT]: {
            [CHAR_TYPE.NUMBER]: STATE.DECIMAL,
        },
        [STATE.DECIMAL]: {
            [CHAR_TYPE.NUMBER]: STATE.DECIMAL,
            [CHAR_TYPE.EXP]: STATE.EXP_LETTER,
            [CHAR_TYPE.SPACE]: STATE.END_SPACE,
        },
        [STATE.EXP_LETTER]: {
            [CHAR_TYPE.SIGN]: STATE.EXP_SIGN,
            [CHAR_TYPE.NUMBER]: STATE.EXP_INT,
        },
        [STATE.EXP_SIGN]: {
            [CHAR_TYPE.NUMBER]: STATE.EXP_INT,
        },
        [STATE.EXP_INT]: {
            [CHAR_TYPE.NUMBER]: STATE.EXP_INT,
            [CHAR_TYPE.SPACE]: STATE.END_SPACE,
        },
        [STATE.END_SPACE]: {
            [CHAR_TYPE.SPACE]: STATE.END_SPACE,
        },
    };

    let curState = STATE.START_SPACE;

    for (const c of s) {
        const charType = isCharType(c);
        curState = stateTransition[curState][charType];
        if (!curState) return false;
    }

    return curState === STATE.INT
        || curState === STATE.INT_POINT
        || curState === STATE.DECIMAL
        || curState === STATE.EXP_INT
        || curState === STATE.END_SPACE;
};

console.log('+100', isNumber('+100'));
console.log('5e2', isNumber('5e2'));
console.log('-123', isNumber('-123'));
console.log('3.1416', isNumber('3.1416'));
console.log('-1E-16', isNumber('-1E-16'));
console.log('0123', isNumber('0123'));

console.log('12e', isNumber('12e'));
console.log('1a3.14', isNumber('1a3.14'));
console.log('1.2.3', isNumber('1.2.3'));
console.log('+-5', isNumber('+-5'));
console.log('12e+5.4', isNumber('12e+5.4'));