function aVeryBigSum(arr) {
	let currentSum = [];
	let helper = 0;

	for (let i = 0; i < arr.length; i++) {
		const currentNumber = arr[i].toString();
		for (let j = currentNumber.length - 1; j >= 0; j--) {
			const currentDigitNew = +currentNumber[j];
			const currentDigitSum =
				currentSum[j] !== undefined ? +currentSum[j] : 0;
			const currentHelper = helper;

			let total = currentDigitNew + currentDigitSum + currentHelper;
			if (total > 9) {
				helper = +total.toString()[0];
				total = 0;
			} else {
				helper = 0;
			}
			currentSum[j] = total;
		}
	}

	if (helper >= 1) {
		currentSum.unshift(helper);
	}

	return currentSum.join("");
}
