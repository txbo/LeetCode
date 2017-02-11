/**
 * 如果数组内有任何重复成员，返回 true
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return Array.from(new Set(nums)).length !== nums.length
};
