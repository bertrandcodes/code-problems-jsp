/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/* 56. Merge Intervals https://leetcode.com/problems/merge-intervals/

Given a collection of intervals, merge all overlapping intervals.


Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
var merge = function (intervals) {
    // if array length is 0, return []
    if (intervals.length <= 1) {
        return intervals
    }
    // for loop, compare i and i + 1, then
    for (let i = 0; i < intervals.length -1; i++){
    //while second in array 1 is greater than first in array 2
    while(intervals[i][1] >= intervals[i+1][0]){
    // compare 2nd in array i and 2nd in array + i for the larger
    intervals[i][1] = Math.max(intervals[i][1], intervals[i+1][1])
    // turn array i into [array i[0], Math.max(array i [1], array i+1 [1])
    // delete array i + 1
    intervals.splice(i+1,1)
    }
    }
    return intervals
    // return input array
};

// Input: array of arrays, subarrays size 2
// Output: array of arrays, subarrays size 2
// Constraints: On time, 01 in place
// Edge cases: when all subarrays compress into one, empty array, subarray never overlaps
// [[1,5],[2,3]]
// [[1,2],[3,4]]
// [[1,2],[2,5]]
// [[1,3],[2,5]]

// [[1,3],[2,6],[8,10],[15,18]]
//   i      i+1
// [[1,6],[5,10],[15,18]]
//    i
// [[1,6],[5,10],[15,18]]
// [[1,10],[15,18]]
//           i

// if array length is 0, return []
// for loop, compare i and i + 1, then
  //while second in array 1 is greater than first in array 2
    // compare 2nd in array i and 2nd in array + i for the larger
    // turn array i into [array i[0], Math.max(array i [1], array i+1 [1])
    // delete array i + 1
// return input array

// new result array with first element of original array
// initiate p1
// initiate p2
// while p2 < array.length
 // if result[p1][0] is less than or equal to array[p2][1], we merge
 // first num is result[p1][0]
 // second num is the greater between array[i][1] and array[i+1][1]
 // push [first num, second num] into result

 // 


 // [[1,3]] result
 // [[1,3],[2,6],[8,10],[15,18]] array
