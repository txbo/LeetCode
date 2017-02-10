/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  var result = []
  var onOff
  for (var i = 0; i < findNums.length; i++) {
    onOff = true
    var j = nums.indexOf(findNums[i]) + 1
    for (; j < nums.length; j++) {
      if (nums[j] > findNums[i]) {
        result.push(nums[j])
        onOff = false
        break
      }
    }
    if (onOff) {
      result.push(-1)
    }
  }
  return result
};
