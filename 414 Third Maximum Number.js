/**
 * 找到数组内第三大的数字
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  var temp = Array.from(new Set(nums)).sort((a, b) => b - a)
  return temp[2] === undefined ? temp[0] : temp[2]
};