/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    if (nums1.length <= 0) {
        return [];
    } else if (nums2.length <= 0) {
        return [];
    }

    let i = 0;
    let j = 0;
    const result = [];
    nums1 = mergeSort(nums1);
    nums2 = mergeSort(nums2);

    if (nums2.length > nums1.length) {
        const tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }

    while (nums1.length > i && nums2.length > j) {
        const numberOne = nums1[i];
        const numberTwo = nums2[j];
        if (numberOne === numberTwo) {
            result.push(numberOne);
            j++;
            i++;
        } else if (nums2[j] > nums1[i]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};

const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid, array.length));
    return sortingArray(left, right);
};

const sortingArray = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    const arr = [];
    while (arr1.length > i && arr2.length > j) {
        if (arr2[j] > arr1[i]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }

    while (arr1.length > i) {
        arr.push(arr1[i]);
        i++;
    }

    while (arr2.length > j) {
        arr.push(arr2[j]);
        j++;
    }

    return arr;
};
