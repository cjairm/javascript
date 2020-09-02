/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if (nums.length <= 1) return false;
    if (nums.length === 2) return nums[1] === nums[0] ? true : false;

    const orderedNums = sort(nums);
    let i = 0;
    let j = i + 1;
    console.log(orderedNums);
    while (orderedNums.length > j) {
        console.log(orderedNums[i], orderedNums[j]);
        if (orderedNums[i] == orderedNums[j]) return true;
        j++;
        i++;
    }
    return false;
};

const sort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = sort(arr.slice(0, mid));
    const right = sort(arr.slice(mid));

    return merge(left, right);
};

const merge = (arr1, arr2) => {
    const results = [];
    let i = 0;
    let j = 0;

    while (arr1.length > i && arr2.length > j) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (arr1.length > i) {
        results.push(arr1[i]);
        i++;
    }

    while (arr2.length > j) {
        results.push(arr2[j]);
        j++;
    }

    return results;
};
