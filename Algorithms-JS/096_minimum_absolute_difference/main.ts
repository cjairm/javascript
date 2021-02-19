function minimumAbsDifference(arr: number[]): number[][] {
	const result = [];
	let diff = Infinity;
	arr.sort(function (a, b) {
		return a - b;
	});

	for (let i = 1; i < arr.length; i++) {
		diff = Math.min(diff, arr[i] - arr[i - 1]);
	}

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] === diff) {
			result.push([arr[i - 1], arr[i]]);
		}
	}

	return result;
}
