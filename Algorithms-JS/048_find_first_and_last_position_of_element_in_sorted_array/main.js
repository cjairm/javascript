/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (r >= l) {
        if (nums[l] < target) {
            l++;
        } else if (nums[r] > target) {
            r--;
        } else if (nums[r] === target && nums[l] === target) {
            return [l, r];
        }
    }

    return [-1, -1];
};
