/**
 * 判断一个数是否是 4 的幂
 * 首先是 4 的幂一定是 2 的幂，即 num&(num-1)===0
 * 其次，4 的二进制 1 的位置一定是 基数位，
 * 用 1431655765 （最大的 基数位为 1 偶数位为 0）
 * 的数与运算等于自己
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  return num === 0 ? false : (num & (num - 1)) === 0 && (num & 1431655765) === num
};