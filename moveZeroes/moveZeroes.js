
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


/* 283. Move Zeroes https://leetcode.com/problems/move-zeroes/

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note: You must do this in-place without making a copy of the array. Minimize the total number of operations.

*/

var moveZeroes = function(nums) {
// declare nonzero pointer at 0
    let nonZero = 0;
   // loop over nums array
   for(let i = 0; i < nums.length; i++ ){
       if(nums[i] !== 0){
   // if nums[i] is not equal to zero
        nums[nonZero] = nums[i]
   // set value at nonzero pointer equal to nums[i]
        nonZero++
   // increment nonzero pointer
        nums[i] = 0
   // set nums[i] equal to zero
       }
   }
   return nums
};

// inputs: array of integers
// output: array of integers sorted with zeros at the end
// constraints: do the problem in place, On
// edge cases: array w/ no 0s, empty array, array w/ all 0s, w negative numbers still move zeros to the end, one numbers

// declare nonzero pointer at 0
// loop over nums array
  // if nums[i] is not equal to zero
  // set value at nonzero pointer equal to nums[i]
  // increment nonzero pointer
  // set nums[i] equal to zero

// [1,3,12,0,0]
//       ^    i   