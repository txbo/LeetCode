/**
 * 一个任意安全数长度的数组其成员的值在 0~length 之间，且可能出现 0~2 次
 * 找出出现 2 次的数
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  var result = []
  nums.reduce(function (memo, curr) {
    if (memo[curr] === undefined) {
      memo[curr] = curr
    } else {
      result.push(curr)
    }
    return memo
  }, [])
  return result

};