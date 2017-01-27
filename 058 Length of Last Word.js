/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var temp = s.trim()
  var result = 0
  if (temp === '') {
    return 0
  }
  for (var i = temp.length - 1; i >= 0; i--) {
    if (temp[i] === ' ') {
      break
    }
    result++
  }
  return result
};