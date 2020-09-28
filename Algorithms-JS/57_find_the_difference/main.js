/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let i = 0;
    const iObj = {};
    let j = 0;
    const jObj = {};

    while (s.length > i) {
        iObj[s[i]] !== undefined ? iObj[s[i]]++ : (iObj[s[i]] = 1);
        i++;
    }

    while (t.length > j) {
        jObj[t[j]] !== undefined ? jObj[t[j]]++ : (jObj[t[j]] = 1);
        j++;
    }

    let allKeys = Object.keys(iObj);
    if (Object.keys(jObj).length > Object.keys(iObj).length) {
        allKeys = Object.keys(jObj);
    }

    for (key of allKeys) {
        if (iObj[key] !== jObj[key]) return key;
    }

    return "";
};
