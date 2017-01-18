/**
 * 将数字的二进制反转输出
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var temp = n.toString(2)
  return parseInt(('0'.repeat(32 - temp.length) + temp).split('').reverse().join(''), 2)
};