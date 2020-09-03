/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const dicNum = {};
    for (let i = 0; i < nums.length; i++) {
        if (dicNum[nums[i]]) {
            dicNum[nums[i]]++;
        } else {
            dicNum[nums[i]] = 1;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (dicNum[nums[j]] == 1) return nums[j];
    }

    return 0;
};
