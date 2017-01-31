/**
 * 给定一个升序数组，和一个数字，返回插入的位置
 * 顺序遍历即可
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i
    }
  }
  return nums.length
};