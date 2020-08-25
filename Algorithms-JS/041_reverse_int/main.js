/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const absNum = Math.abs(x);
    const signNum = Math.sign(x);

    const reverseNum =
        parseInt(absNum.toString().split("").reverse().join("")) * signNum;

    return reverseNum <= 0x7fffffff && reverseNum >= -0x80000000
        ? reverseNum
        : 0;
};
