/**
 *  [Task 1]
 * 
 *  Write a function that will receive a single parameter, A, an array of integers.
 *  Each element of the array is an integer in the range -100,000 to 100,000.
 *  The maximum length of array A is 10,000.
 *  The function will return the smallest positive integer which is not in array A.
 *
 *  E.g. [1, 4, 6, 3, 2] returns 5.
 */

export const firstMissingPositive = (nums: number[]) => {
    // Select only the revalent numbers
    const numsInRange = nums.filter((num) => num > 0 || num > nums.length + 1);

    // Make the revalent numbers into a set
    const numSet = new Set(numsInRange);

    // Iterate positive numbers to find which non-exist in the set
    let smallestPositive = 1;
    while (numSet.has(smallestPositive)) {
        smallestPositive++;
    }

    return smallestPositive;
};
  
// console.log("test1:", firstMissingPositive([1, 4]));
  