function getCode(n, s) {
	let i = s,
		c = n;
	// 65 - 90 = A - Z
	if (n >= 65 && n <= 90) {
		while (i > 0) {
			if (c >= 90) c = 65;
			else c++;

			i--;
		}

		return c;
	}
	// 97 - 122 = a - z
	else if (n >= 97 && n <= 122) {
		while (i > 0) {
			if (c >= 122) c = 97;
			else c++;

			i--;
		}

		return c;
	}
	// 48 - 57 = 0 - 9
	else if (n >= 48 && n <= 57) {
		while (i > 0) {
			if (c >= 57) c = 48;
			else c++;

			i--;
		}

		return c;
	}
	// -
	else {
		return n;
	}
}

function rotationalCipher(input, rotationFactor) {
	// Write your code here
	return input
		.split("")
		.map((i) =>
			String.fromCharCode(getCode(i.charCodeAt(0), rotationFactor))
		)
		.join("");
}
