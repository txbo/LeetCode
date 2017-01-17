/**
 * 判断一个字符串是否是重复的
 * 操作指针，后用正则 replace
 * @param {string} str
 * @return {boolean}
 */
var repeatedSubstringPattern = function (str) {
  var len = str.length
  var harflen = ~~len / 2 + 1
  var temp = ''
  var reg
  for (var i = 1; i < harflen; i++) {
    if (str[0] === str[i] && len % i === 0) {
      temp = str.slice(0, i)
      reg = new RegExp(temp, 'g')
      if (str.replace(reg, '') === '') {
        return true
      }
    }
  }
  return false
};