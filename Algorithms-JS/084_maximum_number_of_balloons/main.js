/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
	text = text.toLowerCase();

	const balloon = {
		b: 0,
		a: 0,
		l: 0,
		o: 0,
		n: 0
	};

	for (let i = 0; text.length > i; i++) {
		if (balloon[text[i]] >= 0) balloon[text[i]]++;
	}

	balloon["l"] = Math.floor(balloon["l"] / 2);
	balloon["o"] = Math.floor(balloon["o"] / 2);

	let min = Math.min(Infinity, balloon["b"]);
	min = Math.min(min, balloon["a"]);
	min = Math.min(min, balloon["n"]);
	min = Math.min(min, balloon["l"]);
	min = Math.min(min, balloon["o"]);

	return min;
};
