/**
 * 如果数组内有任何重复成员，返回 true
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return Array.from(new Set(nums)).length !== nums.length
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums.sort()
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }
  return false
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var temp = {}
  var len = nums.length
  for (var i = 0; i < len; i++) {
    if (nums[i] in temp) {
      return true
    } else {
      temp[nums[i]] = true
    }
  }
  return false
};
