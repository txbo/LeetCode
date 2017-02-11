/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var len = nums.length
  var sum = len * (len - 1) / 2
  return len + sum - nums.reduce((a, b) => a + b)
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var tmp = 0
  var len = nums.length
  for (var i = 0; i < len; i++) {
    tmp ^= i ^ nums[i]
  }
  return tmp ^ i
};
