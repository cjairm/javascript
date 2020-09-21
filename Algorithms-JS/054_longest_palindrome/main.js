/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (str) {
    let longest = "";

    for (let i = 0; str.length > i; i++) {
        const f = goAround(str, i, i);
        const s = goAround(str, i, i + 1);

        let currPal = s;
        if (f.length > s.length) currPal = f;

        if (currPal.length > longest.length) longest = currPal;
    }

    return longest;
};

var goAround = function (s, l, r) {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
        l--;
        r++;
    }

    return s.slice(l + 1, r);
};
