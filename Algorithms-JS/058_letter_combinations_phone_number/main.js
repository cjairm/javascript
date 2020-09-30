/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const combine = function (arr1, arr2) {
        if (!arr2 || arr2 === undefined) return arr1;
        else if (!arr1 || arr1 === undefined) return arr2;

        let f = arr1,
            s = arr2;
        if (arr2.length > arr1.length) {
            f = arr2;
            s = arr1;
        }

        const result = [];
        let i = 0,
            j = 0;

        while (i < f.length) {
            if (j >= s.length) {
                i++;
                j = 0;
            }
            if (i >= f.length) break;
            result.push(f[i] + s[j]);
            j++;
        }

        return result;
    };

    const keys = [
        [" "],
        [],
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"],
    ];

    const digitsArr = digits.toString().split("");
    const newDigitsArr = [];
    for (let i = 0; digitsArr.length > i; i++) {
        const currDigit = +digitsArr[i];
        newDigitsArr.push(keys[currDigit]);
    }

    let result = [];
    let j = 0,
        k = j + 1;

    while (j < newDigitsArr.length) {
        const cm = combine(newDigitsArr[j], newDigitsArr[k]);
        result = [...result, ...cm];
        k++;
        if (k >= newDigitsArr.length) {
            j++;
            k = j + 1;
            if (k >= newDigitsArr.length) break;
        }
    }

    return result;
};
