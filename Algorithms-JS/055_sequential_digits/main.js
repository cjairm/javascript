/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
	let i = low;
	const results = [];

	while (high >= i) {
		const currNum = i.toString().split("");
		const res = checkNum(currNum);
		if (res !== undefined) results.push(i);
		i++;
	}

	return results;
};

var checkNum = function (num) {
	let temp;
	for (let i = 0; num.length > i; i++) {
		const currNum = +num[i] + 1;
		if (temp === undefined) {
			temp = currNum;
			continue;
		}

		if (num[i] != temp) return undefined;
		temp = currNum;
	}

	return num;
};







/**
 * VERSION II`
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = [];
    
    for (let i = low; i <= high; i++) {
        const currNum = [...i.toString()];
        let temp = undefined;
        let f = false;
        for (let j = 0; j < currNum.length; j++) {
            const cn = +currNum[j];
            if (temp === undefined) {
                temp = cn; 
                continue;
            }
            
            if (cn === (temp + 1)) {
                f = true;
            } else {
                f = false;
                break;
            }
            
            temp = cn
        }
        
        if (f) result.push(+currNum.join(""));
    }
    
    return result;
};
