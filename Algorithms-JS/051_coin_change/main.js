/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const map = {};

    function tCoins(n) {
        if (map[n]) return map[n];
        if (n == 0) return 1;
        if (n < 0) return -1;
        let minVal = Infinity;
        let i = 0;
        while (coins.length > i) {
            const coin = coins[i];
            const response = tCoins(n - coin);
            if (response == -1) {
                i++;
                continue;
            }
            minVal = Math.min(minVal, 1 + response);
            i++;
        }
        map[n] = minVal;
        return minVal;
    }

    const tc = tCoins(amount);

    return tc == Infinity ? -1 : tc - 1;
};
