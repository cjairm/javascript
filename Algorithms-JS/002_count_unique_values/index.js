// Create a function called "getCountOfUniqueValues"
function getCountOfUniqueValues(arraySample) {
    // Check the length of the array

    // If array length is equal one/zero, return the count of one/zero unique value
    if (arraySample.length <= 1) {
        return arraySample.length;
    }

    // If array length is equal two, check the first and second value. Then, return the count of unique values
    if (arraySample.length == 2) {
        if (arraySample[0] === arraySample[1]) {
            return 1;
        } else {
            return 2;
        }
    }

    // Create reference (pointer) at the begining (position 1) of the array called firstRef
    let firstRef = 0;
    // Create another reference (pointer) at position 2 in the array called secondRef
    let secondRef = 1;

    // Create loop. Stay there until reference two is equal to the length of the array
    while (arraySample.length > secondRef) { // O(n)
        // If the element in the array that points firstRef and that one that points secondref two are equal. Incremente secondRef
        // If are diferents increment secondRef and firstRef
        if(arraySample[firstRef] !== arraySample[secondRef]){
            firstRef++;
            arraySample[firstRef] = arraySample[secondRef];
        }
        secondRef++;
    }

    // Return value of firstRef
    // return [(firstRef + 1), arraySample];
    return (firstRef + 1);
}

export default getCountOfUniqueValues;