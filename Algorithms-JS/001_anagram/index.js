/*
 *
 * Given two strings, write a function to determine if the second string is an anagramof the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as, 
 * "cinema" formed from "iceman"
 * 
 */

// Examples
//
// Inputs | Inputs       | Inputs               | Inputs
// "", "" | "aaz", "zza" | "anagram", "nagaram" | "awesome", "awesom"
//
// Output | Output       | Output               | Output
// True   | False        | True                 | True

// Pseudo
//
// create function called "isAnagramValid"
    // if both strings has the same length... we continue

    // Iterate first string and save how many letters exists

    // Iterate second string and save how many letter exists

    // Iterate first new array/object created
        // if the letter exists. Continue

        // If number of characters exists. Continue

    // Return true

const isAnagramValid = (stringOne, stringTwo) => {
    // if both strings has the same length. We continue
    const stringOneLength = stringOne.length;
    const stringTwoLength = stringTwo.length;
    if (stringOneLength !== stringTwoLength || stringOne === stringTwo) {
        return false;
    }

    const stringOneCount = {};
    const stringTwoCount = {};

    // Iterate first string and save how many letters exists
    const stringOneLowerCase = stringOne.toLowerCase();
    for(const stringKey in stringOneLowerCase) { // O(n)
        (!stringOneCount[stringOneLowerCase[stringKey]]) ? stringOneCount[stringOneLowerCase[stringKey]] = 1 : stringOneCount[stringOneLowerCase[stringKey]]++;
    }

    // Iterate second string and save how many letter exists
    const stringTwoLowerCase = stringTwo.toLowerCase();
    for(const stringTwoKey in stringTwoLowerCase) { // O(n)
        (!stringTwoCount[stringTwoLowerCase[stringTwoKey]]) ? stringTwoCount[stringTwoLowerCase[stringTwoKey]] = 1 : stringTwoCount[stringTwoLowerCase[stringTwoKey]]++;
    }

    // Iterate first new array/object created
    for (const refOneKey in stringOneCount) { // O(n)
        // if the letter exists. Continue
        if (!stringTwoCount[refOneKey]) {
            return false;
        }

        // If counter of characters exists. Continue
        if (stringOneCount[refOneKey] !== stringTwoCount[refOneKey]) {
            return false;
        }
    }

    // Return true
    return true;
}

const wordOne = "awesome";
const wordTwo = "ewesoma";
const isValid = isAnagramValid(wordOne, wordTwo); // O(3n) => O(n)

console.log(isValid);