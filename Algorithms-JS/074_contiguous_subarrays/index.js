function countSubarrays(arr) {
	// Write your code here
	if (arr.length === 0) return [];

	const cSub = [];
	let i = 0;
	let count = 0;

	while (arr.length > i) {
		count = 0;
		// console.log("count: ", count);
		// console.log("^i: ", i);
		for (let j = i - 1; j >= 0; j--) {
			// console.log("<-j: ", j);
			if (arr[i] < arr[j]) break;
			else count++;
			// console.log("<slice<", arr.slice(j,i+1), "count = ", count);
			// cSub.push(arr.slice(j,i));
		}

		for (let k = i + 1; arr.length > k; k++) {
			// console.log("k->: ", k);
			if (arr[i] < arr[k]) break;
			else count++;
			// console.log(">slice>", arr.slice(i,k+1), "count = ", count);
			// cSub.push(arr.slice(i,k));
		}

		cSub.push(count + 1);
		// console.log(count, count + 1);
		// cSub.push([arr[i]]);
		i++;
	}

	//console.log(cSub);

	return cSub;
}
