/**
 * 找出最长相同前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  var result = ''
  for (var i = 0; i < strs[0].length; i++) {
    for (var j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return result
      }
    }
    result += strs[0][i]
  }
  return result
};