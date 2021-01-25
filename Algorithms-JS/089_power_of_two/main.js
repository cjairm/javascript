/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (target, current = 0) {
	const currentNumber = Math.pow(2, current);

	if (currentNumber > target) return false;
	else if (currentNumber === target) return true;

	return isPowerOfTwo(target, current + 1);
};
