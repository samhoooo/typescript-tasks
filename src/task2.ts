/**
 *  [Task 2]
 * 
 *  Write a function that will receive a single parameter, A, an array of strings. 
 *  The strings will all be up to 5 characters from the lowercase English alphabet. 
 *  Return an integer representing the highest number of consecutive repeated strings in array A.
 * 
 *  e.g. [‘a’, ‘jq’, ‘bpa’, ‘bpa’, ‘q’] returns 2.
 */

export const highestNumberOfConsecutiveRepeats = (arr: string[]) => {
    // Handle empty array edge case 
    if (arr.length === 0)
        return 0;

    let maxRepeat = 1;
    let currentRepeat = 1;
    
    // Iterate array to check consecutive repeats
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] === arr[i]) 
            currentRepeat++;
        else 
            currentRepeat = 1;
        if (currentRepeat > maxRepeat) 
            maxRepeat = currentRepeat;
    }
    return maxRepeat;
}

// console.log(highestNumberOfConsecutiveRepeats(['a','jq','bpa','bpa','q']));
