/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
	let counter = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > nums[i + 1]) {
			if (nums[i - 1] > nums[i + 1]) {
				nums[i + 1] = nums[i];
			}

			counter++;
		}
	}

	if (counter > 1) {
		return false;
	} else {
		return true;
	}
};

// 4, 2, 4
//    i
// flag = true
