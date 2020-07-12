// Create a function called maxSubArraySum
const maxSubarraySum = (arr, n) => {
    // Check array if "n" is bigger than array length return null.
    if (arr.length < n) return null;

    // Create variable "currVal" and save the sum
    let currVal = 0;
	// Create variable "tempVal" and compare with currVal
    let tempVal = 0;

    // Take the number of elements "n" from the array and sum them.
    for (let i = 0; i < n; i++) { // O(n)
        currVal += arr[i];
    }
    tempVal = currVal;

    // Create a loop starting at "n" position in the array
    for (let i = n; i < arr.length; i++) { // O(n)
        // Check for the tempVal compared with currVal
        tempVal = tempVal - arr[i - n] + arr[i];
        currVal = Math.max(currVal, tempVal);
    }
    return currVal;
}

export default maxSubarraySum;
