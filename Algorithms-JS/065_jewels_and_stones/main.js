/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    const jewels = J.split(""),
        stones = S.split("");

    let i = 0,
        j = 0,
        currJ,
        currS,
        count = 0;

    while (jewels.length > i) {
        currJ = jewels[i];
        currS = stones[j];

        if (currJ === currS) count++;

        j++;
        if (j >= stones.length) {
            i++;
            j = 0;
        }
    }

    return count;
};
