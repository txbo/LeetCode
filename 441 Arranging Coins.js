/**
 * 找出给定数字能完整摆出梯形的最大行数
 * 逐级相加，发现大于给定数字，即数量不够
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  var sum = 0
  for (var i = 1;; i++) {
    sum += i
    if (sum > n) {
      break
    }
  }
  return i - 1
};