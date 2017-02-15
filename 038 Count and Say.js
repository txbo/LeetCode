/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var result = '1'
  var now, count = 0,
    temp = ''
  for (var i = 1; i < n; i++) {
    now = result[0]
    for (var j = 0; j < result.length; j++) {
      if (now === result[j]) {
        count++
      } else {
        temp += count + now
        count = 1
        now = result[j]
      }
    }
    temp += count + now
    count = 0
    result = temp
    temp = ''
  }
  return result
};
