/**
 * 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var y = Math.abs(x)
  var symbol = y === x ? 1 : -1
  var tmp = 0;
  while (y) {
    tmp = tmp * 10 + y % 10
    y = ~~(y / 10)
  }
  return tmp > 2147483647 || tmp < -2147483648 ? 0 : symbol * tmp
};
