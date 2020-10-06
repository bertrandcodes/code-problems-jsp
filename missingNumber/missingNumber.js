/**
 * @param {number[]} nums
 * @return {number}
 */

/* 268. Missing Number: https://leetcode.com/problems/missing-number/

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

*/


var missingNumber = function(nums) {
    nums.sort((a,b) => {return a-b})
    for (let i = 0; i < nums.length; i++){
        if ( i !== nums[i] ) return i;
    }
    return nums[nums.length - 1] + 1
};

// input: array from 0 to n, unique numbers
// output: return the number that is missing from the array
// constraints: O(n)
// edge cases: no missing numbers?

// iterate over nums
 // if i does not equal nums[i] then return i