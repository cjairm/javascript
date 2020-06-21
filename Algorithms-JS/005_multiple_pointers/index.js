/*
 *
 *Write a function called isSubsequence which takes in two strings and checks whether the 
 *characters in the first string form a subsequence of the characters in the second string. 
 *In other words, the function should check whether the characters in the first string appear 
 *somewhere in the second string, without their order changing.
 * 
 */

// Examples
//
// Inputs                                | Inputs                         | Inputs                              | Inputs 
// isSubsequence("hello", "hello world") | isSubsequence("sing", "sting") | isSubsequence("abc", "abracadabra") |  isSubsequence("abc", "acb")
//                                       |                                |                                     |
// Output                                | Output                         | Output                              | Output
// true                                  | true                           | true                                | false (order matters)

// Pseudo
//

const isSubsequence = (stringOne, stringTwo) => {
    let i = 0;
    let j = 0;
    if (!stringOne) return true;
    while (j < stringTwo.length) {
        if (stringTwo[j] === stringOne[i]) i++;
        if (i === stringOne.length) return true;
        j++;
    }
    return false;
}

console.log(isSubsequence("abc", "acb"));