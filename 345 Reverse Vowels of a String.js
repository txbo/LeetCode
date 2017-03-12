/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var arr = s.split(''),
    i = 0,
    j = arr.length - 1,
    reg = /[aeiou]/i,
    judgeI, judgeJ
  while (j > i) {
    judgeI = reg.test(arr[i])
    judgeJ = reg.test(arr[j])
    if (judgeI && judgeJ) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    } else if (judgeI) {
      j--
    } else {
      i++
    }
  }
  return arr.join('')
};
