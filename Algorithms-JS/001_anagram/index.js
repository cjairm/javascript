/* =====================================================================
 * -- Name ------ : Anagram - Algorithm
 * -- Date ------ : Jun 21, 2020
 * -- Author ---- : Carlos Mendez
 * -- Description : Readme
 ===================================================================== */

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