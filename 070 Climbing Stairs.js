/**
 * 到达顶部需要 n 步，一次只能走 1、2 步，有几种走法？
 * @param {number} n
 * @return {number}
 */
/**
 * TLE
 * 栈不足
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
 */
var climbStairs = function(n) {
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  } else {
    return climbStairs(n - 1) + climbStairs(n - 2)
  }
};

/**
 * 斐波拉契数列，动态规划
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var a = 0
  var b = 1
  var result = 0
  for (var i = 0; i < n; i++) {
    result = a + b
    a = b
    b = result
  }
  return result
};
