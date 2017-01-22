/**
 * 求出整数的二进制表示的 1 的个数
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return ('' + n.toString(2)).replace(/[^1]/g, '').length
};