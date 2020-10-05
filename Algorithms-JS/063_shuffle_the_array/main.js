/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    const x = nums.slice(0, n);
    const y = nums.slice(n);
    const result = [];
    let i = 0,
        j = 0;

    while (x.length > i && y.length > j) {
        result.push(x[i]);
        result.push(y[j]);
        i++;
        j++;
    }

    while (x.length > i) {
        result.push(x[i]);
        i++;
    }

    while (y.length > j) {
        result.push(y[j]);
        j++;
    }

    return result;
};
