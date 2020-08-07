const maxProfit = (prices) => {
    let have = false;
    let profit = 0;
    let today, tomorrow;
    for (let i = 0; i < prices.length; i++) {
        today = prices[i];
        tomorrow = prices[i + 1];
        if (have) {
            if (today > tomorrow) {
                have = false;
                profit += today;
            }
        } else {
            if (today < tomorrow) {
                have = true;
                profit -= today;
            }
        }
    }
    return profit + (have && today);
};

const profit = maxProfit([7, 6, 4, 3, 1]);
console.log(profit);
