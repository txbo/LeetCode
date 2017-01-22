/**
 * 大整数字符串相加
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var long = '0',
    short = '0',
    count = 0,
    tmp = 0,
    result = '',
    add = ''
  if (num1.length > num2.length) {
    long += num1
    short += num2
  } else {
    long += num2
    short += num1
  }
  for (var i = long.length - 1, j = short.length - 1; i >= 0; i--,
    j--) {
    add = short[j] || '0'
    tmp = +long[i] + (+add) + count
    count = 0
    if (tmp > 9) {
      count = 1
    }
    result = tmp % 10 + result
  }
  result = result.replace(/^0*/, '')
  return result === '' ? '0' : result
};