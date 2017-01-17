/**
 * 递归查询
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return isPow(1, n)
};

function isPow(base, n) {
  if (base === n) {
    return true
  } else if (base > n) {
    return false
  } else {
    return isPow(base * 2, n)
  }
}