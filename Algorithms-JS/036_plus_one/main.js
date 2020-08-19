/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const digLen = digits.length;
    let carry = 0;
    let currDigit = +digits[digLen - 1];
    if (currDigit < 9) {
        digits[digLen - 1]++;
    } else {
        carry++;
        digits[digLen - 1] = 0;
    }

    for (let i = digits.length - 2; i >= 0; i--) {
        if (carry > 0) {
            if (digits[i] + carry <= 9) {
                digits[i] = +digits[i] + +carry;
                carry = 0;
            } else {
                carry = 1;
                digits[i] = 0;
            }
        }
    }

    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
};
