/**
 * 判断两个数字（0~2^31）的二进制位不同的位置的个数
 * 很显然异或运算，match 出所有 1，得到 length
 * 对于没有匹配出来的数，直接返回 0 即可
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let result = (x ^ y).toString(2).match(/1/g)
  return result ? result.length : 0
};