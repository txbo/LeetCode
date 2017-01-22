/**
 * 给定一个非空整数数组，找到使所有数组元素相等所需的最小移动数，其中移动将所选元素递增1或将所选元素递减1。
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  var sum = 0
  nums = nums.sort(function (a, b) {
    return a - b
  })
  var mid = nums[parseInt(nums.length / 2)]
  for (var i = 0; i < nums.length; i++) {
    sum += Math.abs(mid - nums[i])
  }
  return sum
};