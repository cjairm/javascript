/*
 *
 * Implement a function called "countUniqueValues". Which accepts a sorted array, and counts the
 * unique values in the array. There can be negative numbers in the array, but it always be sorted.
 * 
 */

// Examples
//
// Inputs        | Inputs                     | Inputs | Inputs
// [1,1,1,1,1,2] | [1,2,3,4,4,4,7,7,12,12,13] | []     | [-2,-1,-1,0,1]
//
// Output        | Output                     | Output | Output
// 2             | 7                          | 0      | 4

// Pseudo
//
// Create a function called "getCountOfUniqueValues"
    // Check the length of the array
    // If array length is equal two, check the first and second value. Then, return the count of unique values
    // If array length is equal one/zero, return the count of one/zero unique value
    // Create reference (pointer) at the begining (position 1) of the array called firstRef
    // Create another reference (pointer) at position 2 in the array called secondRef
    // Create loop. Stay there until reference two is equal to the length of the array
        // if the element in the array that points firstRef and that one that points secondref two are equal. Incremente secondRef
        // if are diferents increment secondRef and firstRef
    // Return value of firstRef

function getCountOfUniqueValues(arraySample) {
    if (arraySample.length <= 1) {
        return arraySample.length;
    }

    if (arraySample.length == 2) {
        if (arraySample[0] === arraySample[1]) {
            return 1;
        } else {
            return 2;
        }
    }

    let firstRef = 0;
    let secondRef = 1;

    while (arraySample.length > secondRef) {
        if(arraySample[firstRef] !== arraySample[secondRef]){
            firstRef++;
            arraySample[firstRef] = arraySample[secondRef];
        }
        secondRef++;
    }

    return [(firstRef + 1), arraySample];
}
//               f  
// [1,2,3,4,7,12,13,7,12,12,13]
//                          s

const uniqueValues = getCountOfUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
console.log(uniqueValues);