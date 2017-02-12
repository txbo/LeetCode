/**
 * 寻找数组中是否存在相同的数，且间距不大于 K
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var counter = {}
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in counter) {
      if (i - counter[nums[i]] <= k) {
        return true
      } else {
        counter[nums[i]] = i
      }
    } else {
      counter[nums[i]] = i
    }
  }
  return false
};
