function isPalindrome(s: string): boolean {
	const str = [...s.trim().split("")];
	let newStr = "";

	for (let i = 0; i < str.length; i++) {
		const currentChar = str[i].toString();
		if (
			(currentChar.charCodeAt(0) >= 48 &&
				currentChar.charCodeAt(0) <= 57) ||
			(currentChar.charCodeAt(0) >= 65 &&
				currentChar.charCodeAt(0) <= 90) ||
			(currentChar.charCodeAt(0) >= 97 &&
				currentChar.charCodeAt(0) <= 122)
		) {
			newStr += currentChar.toLowerCase();
		}
	}

	let start = 0;
	let end = newStr.length - 1;

	while (end > start) {
		if (newStr[end] !== newStr[start]) return false;
		start++;
		end--;
	}

	return true;
}
