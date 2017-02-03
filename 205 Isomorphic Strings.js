/**
 * 检查两个字符串是否是同结构字符串，各循环一边即可
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var sArr = s.split('')
  var tArr = t.split('')
  var temp = {}
  if (sArr.length !== tArr.length) {
    return false
  } else {
    for (var i = 0; i < sArr.length; i++) {
      if (temp[sArr[i]] === undefined) {
        temp[sArr[i]] = tArr[i]
      } else {
        if (temp[sArr[i]] !== tArr[i]) {
          return false
        }
      }
    }
    temp = {}
    for (var i = 0; i < tArr.length; i++) {
      if (temp[tArr[i]] === undefined) {
        temp[tArr[i]] = sArr[i]
      } else {
        if (temp[tArr[i]] !== sArr[i]) {
          return false
        }
      }
    }
  }
  return true
};