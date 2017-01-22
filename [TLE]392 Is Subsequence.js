/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  var str = s.split('').reduce(function (memo, curr, i, arr) {
    if (i === arr.length - 1) {
      return memo += curr
    }
    return memo += curr + '.*'
  }, '')
  var reg = new RegExp(str)
  return reg.test(t)
};