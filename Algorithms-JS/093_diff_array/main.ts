function diffArray<T>(arr1: T[], arr2: T[]): T[] {
	const concated = arr1.concat(arr2);
	const filtered = concated.filter((item: T) => {
		return !arr1.includes(item) || !arr2.includes(item);
	});
	return filtered;
}
