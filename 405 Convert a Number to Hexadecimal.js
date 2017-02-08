/**
 * 将十进制转换为无符号二进制数
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num >= 0) {
    return num.toString(16)
  } else {
    var n = Math.abs(num).toString(2)
    var arr = ('0'.repeat(32 - n.length) + n).split('')
    var str = arr.map(it => it === '0' ? '1' : '0').join('')
    return (parseInt(str, 2) + 1).toString(16)
  }
};
