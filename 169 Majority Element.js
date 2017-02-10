/**
 * 找出第一个出现次数大于等于 数组长度的 成员
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var count = {}
  var key
  for (var i = 0; i < nums.length; i++) {
    key = '' + nums[i]
    if (key in count) {
      count[key]++
    } else {
      count[key] = 1
    }
  }
  for (var keys in count) {
    if (count[keys] >= nums.length / 2) {
      return +keys
    }
  }
};

/**
 * 找出第一个出现次数大于等于 数组长度的 成员
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var count = {}
  var key
  for (var i = 0; i < nums.length; i++) {
    key = '' + nums[i]
    if (key in count) {
      count[key]++
    } else {
      count[key] = 1
    }
    if (count[key] > ~~(nums.length / 2)) {
      return +key
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  return nums.sort((a, b) => a - b)[~~(nums.length / 2)]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var major = nums[0],
    count = 1
  for (var i = 1; i < nums.length; i++) {
    if (count === 0) {
      count++
      major = nums[i]
    } else if (major === nums[i]) {
      count++
    } else {
      count--
    }
  }
  return major
};
