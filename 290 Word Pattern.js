/**
 * 檢查所给单词的每个字母与所给单词列表是否一一对应，考察数据结构
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  var temp = {}
  var patArr = pattern.split('')
  var strArr = str.split(' ')
  if (patArr.length !== strArr.length) {
    return false
  }
  for (var i = 0; i < patArr.length; i++) {
    if (temp[patArr[i]] === undefined) {
      for (let key in temp) {
        if (temp[key] === strArr[i]) {
          return false
        }
      }
      temp[patArr[i]] = strArr[i]
    } else if (temp[patArr[i]] !== strArr[i]) {
      return false
    }
  }
  return true
};