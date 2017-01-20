/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * 找出第一次崩坏的版本
 * 显然 二分法查找
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 0,
      end = n,
      mid
    while (start < end) {
      mid = start + parseInt((end - start) / 2)
      if (isBadVersion(mid)) {
        end = mid
      } else {
        start = mid + 1
      }
    }
    return end
  };
};