// Create a function called SumZero
const sumZero = (arr) => {
    // Check the length of the array. If the length is zero or one return undefined
    if (arr.length <= 0) {
		return undefined
    }
    // Create one helper variable called right that starts at the beggining of the array
    let left = 0;

    // Create another helper variable called left that starts at the end of the array
    let right = arr.length - 1;

    // Create a loop while right is greater than left
    while(left < right) { // O(n)
        // Sum two variables - array at position right plus array at position left
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            // If the sum is equal to zero return [array at position right, array at position left]
            return [arr[left], arr[right]]
        } else if(sum > 0) {
            // If the sum is greater than zero decrement in one right
            right--;
        } else {
            // If the sum is lower than zero increment in one left
            left++;
        }
    }
}

export default sumZero;