/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s == "" || !s) return -1;

    const letters = {};
    for (let i = 0; s.length > i; i++) {
        const currLetter = s[i];
        letters[currLetter] ? letters[currLetter]++ : (letters[currLetter] = 1);
    }

    let counter = Infinity;
    for (let j = 0; s.length > j; j++) {
        counter = counter < letters[s[j]] ? letters[s[j]] : counter;
        if (letters[s[j]] == 1) {
            return j;
        }
    }

    if (counter <= 0 || counter > 1) {
        return -1;
    }
};
