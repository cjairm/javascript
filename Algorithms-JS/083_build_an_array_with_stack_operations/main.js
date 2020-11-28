/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
	const result = [];
	let l = 0;

	for (let i = 1; n + 1 >= i && l < target.length; i++) {
		result.push("Push");
		if (target[l] === i) l++;
		else result.push("Pop");
	}

	return result;
};
