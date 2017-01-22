/**
 * 求出数组内两数相加等于给定 target 的索引
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    let temp = target - nums[i]
    for (var j = i + 1; j < nums.length; j++) {
      if (temp === nums[j]) {
        return [i, j]
      }
    }
  }
};