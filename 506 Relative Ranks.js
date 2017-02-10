/**
 * AC 但性能不佳
 * 运动员排名颁奖
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var rang = nums.length
  var len = nums.length
  var result = []
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (nums[i] > nums[j]) {
        rang--
      }
    }
    if (rang === 1) {
      result[i] = 'Gold Medal'
    } else if (rang === 2) {
      result[i] = 'Silver Medal'
    } else if (rang === 3) {
      result[i] = 'Bronze Medal'
    } else {
      result[i] = '' + rang
    }
    rang = nums.length
  }
  return result
};
