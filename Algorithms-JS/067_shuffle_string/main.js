/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    const newWord = [];
    let i = 0;

    while (i < s.length) {
        newWord[indices[i]] = s[i];
        i++;
    }

    return newWord.join("");
};
