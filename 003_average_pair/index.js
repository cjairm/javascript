/*
 *
 *Write a function called averagePair.Given a sorted array of integers and a target average, 
 *determine if there is a pair of values in the array where the average of the pair equals the 
 *target average. There may be more than one pair that matches the average target.
 * 
 */

// Examples
//
// Inputs                    | Inputs                                 | Inputs                           | Inputs 
// averagePair([1,2,3], 2.5) | averagePair([1,3,3,5,6,7,10,12,19], 8) | averagePair([-1,0,3,4,5,6], 4.1) |  averagePair([], 4)
//                           |                                        |                                  |
// Output                    | Output                                 | Output                           | Output
// true                      | true                                   | false                            | false

// Pseudo
//

// i
// 1, 2, 3
//    y

// create the main function
    // create two variables (references - pointers)
        // first pointer init in zero and second pointer init in pointer first plus one
    // iterate the main array and check based on pointer one and two if is equal to the average
    // increment secondPointer
    // if second pointer is equal to array length
        // increment first pointer plus one 
        // restart second pointer equal to first pointer plus one

const averagePair = (arrayOfIntegers, average) => {
    if (!arrayOfIntegers || arrayOfIntegers.length === 0 || arrayOfIntegers.length === 1) return false;

    if (arrayOfIntegers.length === 2) {
        if (getAverage(arrayOfIntegers[0], arrayOfIntegers[1], average)) {
            return true;
        }
    }

    let firstPointer = 0;
    let secondPointer = 0;

    while (arrayOfIntegers.length > firstPointer) {
        if (getAverage(arrayOfIntegers[firstPointer], arrayOfIntegers[secondPointer], average)) return true;
        secondPointer++;

        if (secondPointer >= arrayOfIntegers.length) {
            firstPointer++; 
            secondPointer = firstPointer + 1;  
        }
    }

    return false;
};

const getAverage = (intOne, intTwo, average) => {
    if (((intOne + intTwo) / 2) === average) {
        return true;
    } else {
        return false;
    }
}

console.log(averagePair([], 4));