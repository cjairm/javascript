/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i = 0;
    let j = i + 1;

    while (nums.length > i) {
        if (j > nums.length) {
            i++;
            j = i + 1;
        }

        if (nums[i] + nums[j] == target) {
            return [i, j];
        } else {
            j++;
        }
    }
};
