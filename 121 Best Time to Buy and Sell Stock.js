/**
 * 给出每日股票行情，求出最大利润
 * 分别记录最小值和当前最大利润，遍历一遍即可找出
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0]
  return prices.reduce(function (memo, curr) {
    if (curr < min) {
      min = curr
      return memo
    } else {
      return memo < curr - min ? curr - min : memo
    }
  }, 0)
};