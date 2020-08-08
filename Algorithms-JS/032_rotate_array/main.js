const rotateArray = (arr, k) => {
    if (k <= 0) return arr;
    const lastEl = arr.pop();
    arr.unshift(lastEl);
    return rotateArray(arr, k - 1);
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
