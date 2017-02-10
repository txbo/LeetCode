/**
 * 返回正整数的二进制反码（忽略前导 0）
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  return parseInt(Array.prototype.map.call(num.toString(2), it => it === '0' ? '1' : '0').join(''), 2)
};
