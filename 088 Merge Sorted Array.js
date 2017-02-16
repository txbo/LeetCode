/**
 * 两个已排序数组，合并成一个排序数组到第一个数组
 * 由于 nums1 的空间足够，nums1 内原成员的下标只会不变或者增大，所以反向循环
 * 从后读取各个数组内元素，根据大小一次填入 nums1 即可。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var index = m + n
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[--index] = nums1[--m]
    } else {
      nums1[--index] = nums2[--n]
    }
  }
  while (n > 0) {
    nums1[--index] = nums2[--n]
  }
};
