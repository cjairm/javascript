/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const firstString = {};
    const secondString = {};

    for (let i = 0; s.length > i; i++) {
        const currLetter = s[i];
        if (!firstString[currLetter]) {
            firstString[currLetter] = 1;
        } else {
            firstString[currLetter]++;
        }
    }

    for (let j = 0; t.length > j; j++) {
        const currLetter = t[j];
        if (!secondString[currLetter]) {
            secondString[currLetter] = 1;
        } else {
            secondString[currLetter]++;
        }
    }

    let biggerString = firstString;
    if (Object.keys(firstString).length < Object.keys(secondString).length) {
        biggerString = secondString;
    }

    const keyToSearch = Object.keys(biggerString);
    for (let k = 0; keyToSearch.length > k; k++) {
        if (firstString[keyToSearch[k]] !== secondString[keyToSearch[k]]) {
            return false;
        }
    }

    return true;
};
