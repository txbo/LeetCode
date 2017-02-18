/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var sum1 = 0,
    sum2 = 0
  for (var i = 0; i < nums.length; i++) {
    if (i % 2) {
      sum1 = Math.max(sum1 + nums[i], sum2)
    } else {
      sum2 = Math.max(sum2 + nums[i], sum1)
    }
  }
  return Math.max(sum1, sum2)
};
