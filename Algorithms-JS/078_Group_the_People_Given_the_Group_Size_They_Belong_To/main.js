/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

var groupThePeople = function (groupSizes) {
	const numbers = {};

	for (let i = 0; groupSizes.length > i; i++) {
		if (numbers[groupSizes[i]] !== undefined) {
			numbers[groupSizes[i]].push(i);
		} else {
			numbers[groupSizes[i]] = [i];
		}
	}

	const result = [];
	for (const k in numbers) {
		const s = +k;
		if (numbers[k].length <= s) {
			result.push(numbers[k]);
		} else {
			for (let j = 0; numbers[k].length > j; j = j + s) {
				result.push(numbers[k].slice(j, j + s));
			}
		}
	}

	return result;
};
