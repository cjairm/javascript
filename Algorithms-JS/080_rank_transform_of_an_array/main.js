/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
	const sorted = sort(arr);

	const rank = {};
	for (let i = 0, r = 0; i < sorted.length; i += 1) {
		if (sorted[i] !== sorted[i - 1]) {
			r += 1;
			rank[sorted[i]] = r;
		}
	}

	return arr.map((v) => rank[v]);
};

var sort = function (arr) {
	if (arr.length <= 1) return arr;

	const m = Math.floor(arr.length / 2);
	const l = sort(arr.slice(0, m));
	const r = sort(arr.slice(m));

	return merge(l, r);
};

var merge = function (arr1, arr2) {
	const result = [];
	let i = 0,
		j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}

	return result;
};
