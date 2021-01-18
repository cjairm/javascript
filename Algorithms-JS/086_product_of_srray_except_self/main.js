/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	// FIRST APPROACH
	//     const result = [];
	//     let i = 0, j = 0, temp = 1;

	//     while (i < nums.length) {
	//         if (j >= nums.length) {
	//             result.push(temp);
	//             i++;
	//             temp = 1;
	//             j = 0;
	//         } else {
	//             if (j !== i) {
	//                 temp *= nums[j];
	//             }

	//             j++;
	//         }
	//     }

	//     return result;

	const lengthOfNums = nums.length;
	const result = [];
	let helper = 1;

	for (let i = 0; i < lengthOfNums; i++) {
		result[i] = helper;
		helper *= nums[i];
	}

	// helper = 24
	// result = 24, 12, 8, 6
	// nums   = 1, 2, 3, 4
	//          i

	helper = 1;
	for (let i = lengthOfNums - 1; i >= 0; i--) {
		result[i] *= helper;
		helper *= nums[i];
	}

	// result = 1, 1, 2, 6
	// nums = 1, 2, 3, 4
	//                 i
	// result = 2 * 3
	// right = 1

	return result;
	// 1, 2, 3, 4
	//          i
	// j
};
