/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    if (nums.length <= 1) return nums;
    if (nums.length <= 2) return nums[0] == nums[1] ? [nums[0]] : nums;

    const sorted = sort(nums);
    const result = [];
    const times = Math.ceil(sorted.length / 3);
    let count = 0;

    for (let i = 0; sorted.length > i; i++) {
        if (sorted[i] == sorted[i + 1] && count == 0) {
            count = 2;
        } else if (sorted[i] == sorted[i + 1]) {
            count++;
        } else {
            if (count >= times) result.push(sorted[i]);
            count = 0;
        }
    }

    return result;
};

var sort = function (arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = sort(arr.slice(0, mid));
    const right = sort(arr.slice(mid));

    return merge(left, right);
};

var merge = function (arr1, arr2) {
    const result = [];
    let i = 0,
        j = 0;

    while (arr1.length > i && arr2.length > j) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (arr1.length > i) {
        result.push(arr1[i]);
        i++;
    }

    while (arr2.length > j) {
        result.push(arr2[j]);
        j++;
    }

    return result;
};
