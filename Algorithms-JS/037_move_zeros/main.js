/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    while (end > start) {
        const currNum = nums[start];
        if (currNum == 0) {
            nums.splice(start, 1);
            nums.push(0);
            end--;
        } else {
            start++;
        }
    }
};
