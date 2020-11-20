/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
	for (let i = 0; arr.length - 2 > i; i++) {
		if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1)
			return true;
	}

	return false;
};
