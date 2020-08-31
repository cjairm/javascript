/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let tomorrow = 0;
    let today = 0;
    let flag = false;

    for (let i = 0; prices.length > i; i++) {
        today = prices[i];
        tomorrow = prices[i + 1];

        if (flag) {
            if (today > tomorrow) {
                profit = +profit + +today;
                flag = false;
            }
        } else {
            if (tomorrow > today) {
                profit = +profit - +today;
                flag = true;
            }
        }
    }

    return flag ? profit + today : profit;
};
