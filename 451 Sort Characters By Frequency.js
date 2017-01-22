/**
 * 把字符串按照其中字母出现次数的多少，从大到小排列
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  if (s === '') {
    return ''
  }
  var temp = s.split('').sort().join('')
  return temp.match(/(.)\1*/g).sort((a, b) => b.length - a.length).join('')
};