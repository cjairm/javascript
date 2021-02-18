function dayOfYear(date: string): number {
	const months = {
		"01": 31,
		"02": 28,
		"03": 31,
		"04": 30,
		"05": 31,
		"06": 30,
		"07": 31,
		"08": 31,
		"09": 30,
		"10": 31,
		"11": 30,
		"12": 31
	};

	const d = date.split("-");
	const year = +d[0];
	const month = d[1];
	const day = d[2];
	let totalDays = 0;

	if (year % 400 === 0) {
		months["02"] = 29;
	}

	if (year % 100 === 0) {
		months["02"] = 28;
	}

	if (year % 4 === 0) {
		months["02"] = 29;
	}

	for (let m of Object.keys(months).sort()) {
		if (month === m) {
			totalDays += +day;
			break;
		} else {
			totalDays += +months[m];
		}
	}

	return totalDays;
}
