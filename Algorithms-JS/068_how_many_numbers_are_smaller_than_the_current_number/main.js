/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    const smallers = [];
    let i = 0,
        j = 0,
        ni = 0,
        nj = 0,
        count = 0;

    while (nums.length > i) {
        ni = nums[i];
        nj = nums[j];

        if (i !== j) if (ni > nj) count++;

        j++;
        if (j >= nums.length) {
            smallers.push(count);
            i++;
            j = 0;
            count = 0;
        }
    }

    return smallers;
};
