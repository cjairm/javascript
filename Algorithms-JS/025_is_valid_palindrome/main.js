/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s === null || s === "") {
        return true;
    } else {
        var left = 0;
        var right = s.length - 1;
        var left_char;
        var right_char;
        while (left < right) {
            left_char = s.charAt(left).toLowerCase();
            right_char = s.charAt(right).toLowerCase();
            if (isAlphaNumeric(left_char) && isAlphaNumeric(right_char)) {
                if (left_char == right_char) {
                    left++;
                    right--;
                } else {
                    return false;
                }
            } else {
                if (!isAlphaNumeric(left_char)) {
                    left++;
                }
                if (!isAlphaNumeric(right_char)) {
                    right--;
                }
            }
        }
        return true;
    }
};

function isAlphaNumeric(c) {
    if (/[^a-zA-Z0-9]/.test(c)) {
        return false;
    } else {
        return true;
    }
}
