/*
 *
 *Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 *and checks whether there are any duplicates among the arguments passed in. You can solve this 
 *using the frequency counter pattern OR the multiple pointers pattern.
 * 
 */

// Examples
//
// Inputs                    | Inputs                    | Inputs 
// areThereDuplicates(1,2,3) | areThereDuplicates(1,2,2) | areThereDuplicates('a','b','c','a')
//                           |                           |
// Output                    | Output                    | Output
// false                     | true                      | true

// Pseudo
// Create a funtion call areThereDuplicates 
    // In this function, catch all the arguments and save it as array
    // check the length of the array.
        // If the array length is zero or one we can assume that there is no duplicated values
        // if the array length is two we check if the first and second value are equal or not.
            // If equal returns that we have a duplicated values
            // If diferent return that we do NOT have duplicated values
        // If the array is bigger than 2 elements
            // Create two pointers, the first one start at zero and the other one starts at as first pointer plus one
        
            // Create a loop while array length is bigger than first pointer (the first pointer is our main helper)
                // if the value that is pointing the first pointer is equal to that one that is pointing the second one
                    // return that we have a duplicated value
                // else increment the second pointer

                // if the second pointer is equal or greater than the length of the array saved
                    // incremente first pointer and restart second pointer equal to pointer one plus one.
                
            // If while loop finish return that we do not have duplicated values

                

const areThereDuplicates = (...arguments) => {
    if (arguments.length == 0 || arguments.length == 1) {
        return false;
    } else if (arguments.length == 2 && (arguments[0] === arguments[1])) {
        return true;
    } else if (arguments.length == 2 && (arguments[0] !== arguments[1])) {
        return false;
    }

    let firstPointer = 0;
    let secondPointer = 1;

    while (arguments.length > firstPointer) {

        if (arguments[firstPointer] === arguments[secondPointer]) return true;
        
        secondPointer++;

        if (secondPointer >= arguments.length) {
            firstPointer++;
            secondPointer = firstPointer + 1;
        }
    }

    return false;
}

console.log(areThereDuplicates('a','b','c','d'));