/**
 * 之字型重组字符串
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let temp = []
  for (let i = 0; i < numRows; i++) {
    temp.push([])
  }
  if (numRows === 1) {
    return s
  }
  let onOff
  for (let i = 0, j = 0; i < s.length; i++) {
    temp[j].push(s[i])
    if (j === numRows - 1) {
      onOff = false
    }
    if (j === 0) {
      onOff = true
    }
    if (onOff) {
      j++
    } else {
      j--
    }
  }
  return temp.map(a => a.join('')).join('')
};