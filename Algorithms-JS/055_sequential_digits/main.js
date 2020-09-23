/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let i = low;
    const results = [];

    while (high >= i) {
        const currNum = i.toString().split("");
        const res = checkNum(currNum);
        if (res !== undefined) results.push(i);
        i++;
    }

    return results;
};

var checkNum = function (num) {
    let temp;
    for (let i = 0; num.length > i; i++) {
        const currNum = +num[i] + 1;
        if (temp === undefined) {
            temp = currNum;
            continue;
        }

        if (num[i] != temp) return undefined;
        temp = currNum;
    }

    return num;
};
