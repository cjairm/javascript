function removeMultiple(string, k) {
    let s = 1;
    let f = 0;
    let count = 0;
    let result = [];

    while (string.length > f) {
        const currentFirst = string[f];
        const currentSecond = string[s];
        if (currentFirst != currentSecond) {
            f++;
            count = 0;
        } else {
            count++;
            s++;
        }

        if (count == k) {
            result = string.slice(0, f).concat(string.slice(s, string.length));
            return removeMultiple(result, k);
        }
    }
    return string;
}

const newArray = removeMultiple("abbcccbddddddddd", 3);
console.log(newArray);
