/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
    const sortedIntervals = sortArray(intervals);

    const results = [];
    let temp;

    for (let i = 1; sortedIntervals.length > i; i++) {
        const lastEl = results[results.length - 1];
        if (results.length <= 0 || !intersect(sortedIntervals[i], lastEl)) {
            results.push(sortedIntervals[i]);
        } else {
            temp = sortedIntervals[i];
            while (results.length > 0 && intersect(temp, lastEl)) {
                results.pop();
            }
            results.push(temp);
        }
    }

    return results.length;
};

var intersect = function (a, b) {
    return (b[0] <= a[0] && b[1] >= a[1]) || (a[0] <= b[0] && a[1] >= b[1]);
};

var sortArray = function (arr) {
    if (arr.length <= 1) return arr;

    const m = Math.floor(arr.length / 2);
    const l = sortArray(arr.slice(0, m));
    const r = sortArray(arr.slice(m));

    return mergeArrays(l, r);
};

var mergeArrays = function (arr1, arr2) {
    const result = [];
    let i = 0,
        j = 0;

    while (arr1.length > i && arr2.length > j) {
        if (arr2[j][0] < arr1[i][0] && arr2[j][1] < arr1[i][1]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    while (arr1.length > i) {
        result.push(arr1[i]);
        i++;
    }

    while (arr2.length > j) {
        result.push(arr2[j]);
        j++;
    }

    return result;
};
