/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var result = nums[0]
  var temp = nums[0]
  for (var i = 1; i < nums.length; i++) {
    temp = Math.max(temp + nums[i], nums[i])
    result = Math.max(temp, result)
  }
  return result
};
