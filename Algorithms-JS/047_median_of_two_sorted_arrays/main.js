/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const mergeArray = function (arr1, arr2) {
        let i = 0;
        let j = 0;
        const results = [];

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

    const sortedArray = mergeArray(nums1, nums2);

    let mid = 0;
    let median = 0;
    if (sortedArray.length % 2 === 0) {
        mid = Math.floor(sortedArray.length / 2) - 1;
        median = (sortedArray[mid] + sortedArray[mid + 1]) / 2;
    } else {
        mid = Math.floor(sortedArray.length / 2);
        median = sortedArray[mid];
    }

    return median;
};
