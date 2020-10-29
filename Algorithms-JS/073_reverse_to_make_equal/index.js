function areTheyEqual(array_a, array_b) {
	// Write your code here
	const arrayAComparative = {};
	const arrayBComparative = {};

	for (let i = 0; array_a.length > i; i++) {
		arrayAComparative[array_a[i].toString()] === undefined
			? (arrayAComparative[array_a[i].toString()] = 1)
			: arrayAComparative[array_a[i].toString()]++;
	}

	for (let j = 0; array_b.length > j; j++) {
		arrayBComparative[array_b[j].toString()] === undefined
			? (arrayBComparative[array_b[j].toString()] = 1)
			: arrayBComparative[array_b[j].toString()]++;
	}

	for (const key in arrayBComparative) {
		if (arrayAComparative[key] !== arrayBComparative[key]) {
			return false;
		}
	}

	return true;
}
