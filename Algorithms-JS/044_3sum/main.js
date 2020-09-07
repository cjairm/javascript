/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sorted = sortedEl(nums);
    const arrLen = nums.length;
    const result = [];
    let f = false;

    for (let i = 0; sorted.length > i; i++) {
        let left = i + 1;
        let right = arrLen - 1;
        const currNum = sorted[i];

        while (left < right) {
            if (currNum + sorted[left] + sorted[right] == 0) {
                for (let j = 0; result.length > j; j++) {
                    if (
                        arraysEqual(result[j], [
                            currNum,
                            sorted[left],
                            sorted[right],
                        ])
                    ) {
                        f = true;
                    }
                }
                if (!f) {
                    result.push([currNum, sorted[left], sorted[right]]);
                } else {
                    f = false;
                }
                left += 1;
                right -= 1;
            } else if (currNum + sorted[left] + sorted[right] < 0) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    return result;
};

const sortedEl = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = sortedEl(arr.slice(0, mid));
    const right = sortedEl(arr.slice(mid));

    return mergeArr(left, right);
};

const mergeArr = (arr1, arr2) => {
    const result = [];
    let i = 0;
    let j = 0;

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

function arraysEqual(_arr1, _arr2) {
    if (
        !Array.isArray(_arr1) ||
        !Array.isArray(_arr2) ||
        _arr1.length !== _arr2.length
    )
        return false;

    var arr1 = _arr1.concat().sort();
    var arr2 = _arr2.concat().sort();

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
