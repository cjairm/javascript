/**
 * @param {number} n
 * @return {number}
 *
 * Get each number from the full number
 * Pass them to a function
 * Get Product Result
 * Get Sum Result
 * Get Product and Sum Result and Sub Sum from Product
 *
 */
var subtractProductAndSum = function (n) {
	if (n <= 0) return 0;
	const nums = n
		.toString()
		.split("")
		.map((n) => parseInt(n));
	const p = nums.reduce((currVal, nextVal) => currVal * nextVal, 1);
	const s = nums.reduce((currVal, nextVal) => currVal + nextVal, 0);

	return p - s;
};
