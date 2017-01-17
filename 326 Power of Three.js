/**
 * 判断一个值是否是 3 的幂
 * 最大安全 3 的幂 模被判断的数 为 0
 * 排除小于 1 的数
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n >= 1) {
    return 5559060566555523 % n === 0
  } else {
    return false
  }
};