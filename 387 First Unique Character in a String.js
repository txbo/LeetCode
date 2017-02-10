/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回-1。
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var onOff = true
  for (var i = 0; i < s.length; i++) {
    onOff = true
    for (var j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
        onOff = false
        break
      }
    }
    if (onOff) {
      return i
    }
  }
  return -1
};

// AC

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var temp = {}
  for (var i = 0; i < s.length; i++) {
    if (s[i] in temp) {
      temp[s[i]].count++
    } else {
      temp[s[i]] = {}
      temp[s[i]].index = i
      temp[s[i]].count = 1
    }
  }
  for (var key in temp) {
    if (temp[key].count === 1) {
      return temp[key].index
    }
  }
  return -1
};
