/**
 * 找出三个数。和为 0
 * o(n^3)也能 AC 系列
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var len = nums.length,
    result = [],
    lastJ, lastK
  nums = nums.sort((a, b) => a - b)
  for (var i = 0; i < len; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    for (var j = i + 1; j < len; j++) {
      if (nums[j] === lastJ) {
        continue
      } else {
        lastJ = nums[j]
      }
      for (var k = j + 1; k < len; k++) {
        if (nums[k] === lastK) {
          continue
        } else {
          lastK = nums[k]
        }
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]])
        }
      }
      lastK = undefined
    }
    lastJ = undefined
  }
  return result
};