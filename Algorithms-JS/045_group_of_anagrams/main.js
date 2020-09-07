/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const counterWords = {};
    const result = [];

    for (let i = 0; strs.length > i; i++) {
        const currWord = strs[i];
        const sortWord = sortLetters(currWord.split("")).join("");

        if (counterWords[sortWord]) {
            counterWords[sortWord].push(currWord);
        } else {
            counterWords[sortWord] = [currWord];
        }
    }

    for (let j in counterWords) {
        result.push(counterWords[j]);
    }

    return result;
};

var sortLetters = function (arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = sortLetters(arr.slice(0, mid));
    const right = sortLetters(arr.slice(mid));

    return mergeLetters(left, right);
};

var mergeLetters = function (arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (arr1.length > i && arr2.length > j) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
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
