/**
 * 求交集
 * 不多说，o(n^2)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var long, short
  if (nums1.length === 0 || nums2.length === 0) {
    return []
  } else if (nums1.length > nums2.length) {
    long = nums1
    short = nums2
  } else {
    long = nums2
    short = nums1
  }
  var result = []
  for (var i = 0; i < short.length; i++) {
    for (var j = 0; j < long.length; j++) {
      if (long[j] === short[i]) {
        result.push(long.splice(j, 1)[0])
        break
      }
    }
  }
  return result
};