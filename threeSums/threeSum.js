/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 15. 3Sum: https://leetcode.com/problems/3sum/

Given an array nums of n integers, are there elements a, b, c in nums
such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

NOTE: This is an essential interview prompt, one which allows you to
demonstrate your ability to reduce time complexity. Solve this in whatever
way you are able to today, using "brute force" (ignoring efficiency) if necessary.
We will revisit this problem later in JSP, after re/learning algorithms that will
help you approach this problem with time complexity in mind.

In Leetcode, the solution is locked for Premium subscribers. We will Slack a solution
link 15 minutes before the end of the pair module so you and your partner can
review the solution together.

*/

var threeSum = function (nums) {
    // sort array
    nums.sort((a, b) => a - b)
    console.log(nums)
    // create result array
    const result = [];
    // if array is empty or array[0] is greater or equal to 0, return []
    if (nums.length === 0) {
        return result
    }
    // loop over sorted array
    for (let i = 0; i < nums.length-2; i++) {
        if(nums[i] == nums[i-1]){
           continue
           }
        // pointer 2 is i+1
        let p2 = i + 1
        // pointer 3 is array.length - 1
        let p3 = nums.length - 1
        // while pointer 2 is less than pointer 3
        while (p2 < p3) {
            let sum = nums[i] + nums[p2] + nums[p3];
            // if num at pointer 1,2,3 add up to less than 0, drop pointer 3
            if (sum < 0) {
                p2++
            } else if (sum > 0) {
                p3--
            } else {
                console.log([nums[i], nums[p2], nums[p3]])
                result.push([nums[i], nums[p2], nums[p3]])
           while(nums[p2] === nums[p2+1]){
               p2++
           }
                           while(nums[p3] === nums[p3+1]){
               p3--
           }
                p2++
                p3--
           
            }
            // if more, increase pointer 2
            // if equal, package into an array and push to result array
            // increase pointer 2
        }
    }
    return result
    // return result array
};

//input: unique numbers
//output: non duplicate array of arrays of triplets that add up to zero
//contraints: Onlogn time O1 space
//edge cases: if empty, return [], if no negatives, return 0