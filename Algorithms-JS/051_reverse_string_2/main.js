/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const arr = s.split("");
    const len = arr.length;
    let i = 0;
    while (i < len) {
        const j = Math.min(i + k - 1, len - 1);
        swap(arr, i, j);
        i += 2 * k;
    }
    return arr.join("").toString();
};

var swap = (arr, l, r) => {
    while (l < r) {
        const temp = arr[l];
        arr[l++] = arr[r];
        arr[r--] = temp;
    }
};
