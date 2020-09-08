/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let max = 0;
    let stringMap = {};

    for (let i = 0; s.length > i; i++) {
        const charExists = stringMap[s[i]];
        if (charExists) {
            stringMap = {};
            start++;
            i = start;
        }

        stringMap[s[i]] = true;
        const currPos = i - start + 1;
        max = Math.max(max, currPos);
    }

    return max;
};
