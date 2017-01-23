/**
 * 求一个数的平方根的整数部分
 * 牛顿法
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  var temp = x
  while (Math.abs(temp * temp - x) > 0.000001) {
    temp = (temp + x / temp) / 2
  }
  return ~~temp
};

/**
 * 求一个数的平方根的整数部分
 * @param {number} x
 * @return {number}
 */
var mySqrt2 = function (x) {
  return ~~Math.sqrt(x)
};