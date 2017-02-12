/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var repo = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  var len = s.length
  var sum = repo[s[len - 1]]
  for (var i = len - 2; i >= 0; i--) {
    if (repo[s[i]] < repo[s[i + 1]]) {
      sum -= repo[s[i]]
    } else {
      sum += repo[s[i]]
    }
  }
  return sum
};
