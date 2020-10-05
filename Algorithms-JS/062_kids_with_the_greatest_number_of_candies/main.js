/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const results = [];
    let max = 0,
        cm = 0;

    for (let i = 0; candies.length > i; i++) {
        max = Math.max(candies[i], max);
    }

    for (let i = 0; candies.length > i; i++) {
        cm = candies[i] + extraCandies;
        if (cm >= max) results.push(true);
        else results.push(false);
    }

    return results;
};
