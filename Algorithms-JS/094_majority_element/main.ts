function majorityElement(nums: number[]): number {
	const countObj: { [key: string]: number } = {};
	for (let n of nums) {
		const currNumber = n.toString();
		if (countObj[currNumber] >= 1) {
			countObj[currNumber] += 1;
		} else {
			countObj[currNumber] = 1;
		}
	}

	let result = 0;
	for (let key in countObj) {
		const currTotal = countObj[key];
		if (currTotal > nums.length / 2) {
			result = +key;
		}
	}

	return result;
}
