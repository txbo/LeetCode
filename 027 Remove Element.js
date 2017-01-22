/**
 * 找出并原位删除与给定数值相等的成员，并返回数组长度
 * 循环 split 即可
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};