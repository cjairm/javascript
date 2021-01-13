/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const newWord = [];
	const wordsSplited = s.split(" ");

	for (const word of wordsSplited) {
		const wordReversed = [...word].reverse();
		const joiningWord = wordReversed.join("");

		newWord.push(joiningWord);
	}

	return newWord.join(" ");
};
