// Create a function called "sameButSquared"
const sameButSquared =(arr1, arr2) => {
    // If the length are different stop the script and return false
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Create frequency variable helper called fq1
    let frequencyCounter1 = {};
    // Create another frequency variable helper called fq2
    let frequencyCounter2 = {};

    // Iterate first array
    for (let val of arr1) { // O(n)
        // If element of the array exists in fq1
        if (frequencyCounter1[val]) {
            // Increment the key of fq1
            frequencyCounter1[val] = frequencyCounter1[val] + 1
        } else {
            // Create new element in fq1 with key name same as the element of the array
            frequencyCounter1[val] = 1
        }     
    }

    for (let val of arr2) { // O(n)
        // If element of the array exists in fq2
        if (frequencyCounter2[val]) {
            // Increment the key of fq2
            frequencyCounter2[val] = frequencyCounter2[val] + 1
        } else {
            // Create new element in fq2 with key name same as the element of the array
            frequencyCounter2[val] = 1
        }  
    }

    // Iterate fq1 helper that was created
    for (let key in frequencyCounter1) { // O(n)
        // If the current key value does NOT exists the array fq2 stop the script and return false
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        // If the current value does NOT match with same value but squared stop the script and retur false
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    
    return true;
}

export default sameButSquared;
