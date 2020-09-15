/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    const INT_POS = Math.pow(2, 31) - 1;
    const INT_NEG = Math.pow(-2, 31);

    str = str.trim();
    if (!str) return 0;

    let sign = 1;
    let i = 0,
        answer = 0;

    if (str[i] == "+") {
        sign = 1;
        i++;
    } else if (str[i] == "-") {
        sign = -1;
        i++;
    }

    for (; i < str.length; i++) {
        const temp = str.charCodeAt(i) - 48;
        if (temp > 9 || temp < 0) break;
        if (answer > INT_POS || answer > (INT_POS - temp) / 10)
            return sign == 1 ? INT_POS : INT_NEG;
        else answer = answer * 10 + temp;
    }
    return answer * sign;
};
