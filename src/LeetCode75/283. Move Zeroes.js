/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // check each number and if number is zero, push it to the last
    // count the number of zeroes
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            // find a zero
            const zeroIndex = nums.indexOf(0);
            nums.splice(zeroIndex, 1);
            nums.push(0);
        }
    }


    return nums
};

/* 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
