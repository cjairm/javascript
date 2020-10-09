/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let counter = 0;

    const reduceToZero = (n) => {
        if (n <= 0) return counter;

        counter++;
        return n % 2 == 0 ? reduceToZero(n / 2) : reduceToZero(n - 1);
    };

    return reduceToZero(num);
};
