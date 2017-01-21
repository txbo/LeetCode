/**
 * 判断字符串内的字母和数字是否是回文数字
 * 正则去掉无关的字符后，控制两个指针即可
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var result = s.replace(/\W/g, '').toLowerCase()
  //return result
  for (var i = 0, j = result.length - 1; i <= j; i++, j--) {
    if (result[i] !== result[j]) {
      return false
    }
  }
  return true
};