// Create a function called "searchNumber"
const searchNumber = (array, n) => {
    if (array.length == 1) {
        // If the array received contains one element stop the program and return 1
        return 1;
    } else if (array.length == 0) {
        // If the array received contains zero elements stop the program ans return -1
        return -1;
    }

    // Init a pointer at the end of the array and another one at the beggining of the array.
    let min = 0;
    let max = array.length - 1;

    // Init a loop while max pointer is bigger than min pointer
    while (min <= max) { // O(n)
        // Get the middle of the array
        const mid = parseInt(Math.floor(min + max) / 2);
        const currEle = array[mid];

        if (currEle < n) {
            // If middle value is lower than searched number move min pointer to right (middle pointer + 1)
            min = mid + 1;
        } else if (currEle > n) {
            // If middle value is bigger than searched number move max pointer to left (middle pointer - 1)
            max = mid - 1;
        } else {
            // if Equal return position (middle index)
            return mid;
        }
    }

    return -1;
};

export default searchNumber;
