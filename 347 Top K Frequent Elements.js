/**
 * 给定一个非空的整数数组，返回k个最频繁的元素。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/**
 * input: fn([1,1,1,1,2,2,2,3,3,4], 2)
 * return -> [1,2]
 */





var topKFrequent = function (nums, k) {
  var theHash = {}
  var tmp = []
  var result = []
  for (var i = 0; i < nums.length; i++) {
    if (!theHash[nums[i]]) {
      theHash[nums[i]] = 1
    } else {
      theHash[nums[i]]++
    }
  }
  tmp = Object.entries(theHash).sort(function (a, b) {
    return b[1] - a[1]
  })
  for (var i = 0; i < k; i++) {
    result[i] = +tmp[i][0]
  }
  return result
};