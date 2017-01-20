/**
 * 将字符串转换成数字，考虑各种情况
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  temp = parseInt(str.trim())
  temp = isNaN(temp) ? 0 : temp
  return temp > 2147483647 ? 2147483647 : temp < -2147483648 ? -2147483648 : temp
};