/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var arr = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      arr.push(s[i])
    }
    if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      if ((s[i] === ')' && arr[arr.length - 1] === '(') || (s[i] === ']' && arr[arr.length - 1] === '[') || (s[i] === '}' && arr[arr.length - 1] === '{')) {
        arr.pop()
      } else {
        return false
      }
    }
  }
  return arr.length === 0
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var arr = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      arr.push(s[i])
    } else if (s[i] === ')') {
      if (arr[arr.length - 1] === '(') {
        arr.pop()
      } else {
        return false
      }
    } else if (s[i] === ']') {
      if (arr[arr.length - 1] === '[') {
        arr.pop()
      } else {
        return false
      }
    } else if (s[i] === '}') {
      if (arr[arr.length - 1] === '{') {
        arr.pop()
      } else {
        return false
      }
    }
  }
  return arr.length === 0
};
