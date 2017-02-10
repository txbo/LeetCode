/**
 * 给定数组，成员只有 0 1 ，找出最长的连续的 1 的个数。
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var temp = 0
  var result = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      temp++
    } else {
      result = result < temp ? temp : result
      temp = 0
    }
  }
  result = result < temp ? temp : result
  return result
};
