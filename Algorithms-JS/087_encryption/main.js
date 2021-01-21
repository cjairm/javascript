// Complete the encryption function below.
function encryption(s) {
	let h = 0;
	let currentChar;

	const result = [];
	let wordTemp = [];

	const str = s.trim();
	const length = str.length;

	const square = Math.sqrt(length);
	let rows = Math.floor(square);
	const columns = Math.ceil(square);

	if (columns * rows < length) rows += 1;

	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			if (i + h >= length) break;

			currentChar = str[i + h];
			wordTemp.push(currentChar);
			h = h + columns;
		}
		result.push(wordTemp.join(""));
		wordTemp = [];
		h = 0;
	}

	return result.join(" ");
}
