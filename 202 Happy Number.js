/**
 * 求一个数是否是 happy 数
 * 递归每个位上平方和等于 1 ，则返回 true
 * 发现，一旦递归出现平方和等于 4（2^2），则会无限循环下去
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) {
    return true
  } else if (n === 4) {
    return false
  } else {
    return isHappy(('' + n).split('').reduce((memo, curr) => memo + Math.pow(+curr, 2), 0))
  }
};