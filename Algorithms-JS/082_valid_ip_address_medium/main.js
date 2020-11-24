/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
	if (isIPv4(IP)) return "IPv4";
	if (isIPv6(IP)) return "IPv6";
	else return "Neither";
};

var isIPv4 = function (s) {
	let c = 0;
	const ss = [...s];
	for (let j = 0; j < ss.length; j++) {
		if (ss[j] === ".") c++;
		if (c >= 4) return false;
	}

	if (c !== 3) return false;

	const ipArr = s.split(".").map((n) => {
		if (n.length >= 2 && +n[0] === 0) return -1;
		else return n;
	});

	for (let i = 0; ipArr.length > i; i++) {
		if ((+ipArr[i]).toString() !== ipArr[i].toString()) return false;
		if (0 > +ipArr[i] || +ipArr[i] > 255) return false;
	}

	return true;
};

var isIPv6 = function (s) {
	let c = 0;
	const ss = [...s];
	for (let j = 0; j < ss.length; j++) {
		if (c >= 8) return false;
		if (ss[j] === ":") c++;
	}

	if (c !== 7) return false;

	const ipArr = s.split(":").map((n) => {
		if (n.length > 4 || n.length < 1) return -1;
		for (let i = 0; n.length > i; i++) {
			const nn = +n[i].charCodeAt(0);
			if (
				!(nn >= 48 && nn <= 57) &&
				!(nn >= 65 && nn <= 70) &&
				!(nn >= 97 && nn <= 102)
			)
				return -1;
		}
		return n;
	});

	for (let k = 0; ipArr.length > k; k++) if (+ipArr[k] === -1) return false;

	return true;
};
