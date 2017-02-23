/**
 * 1,3,5,7...
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  var i = 1,
    j = 1
  while (i < num) {
    j += 2
    i += j
  }
  return i === num
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  var i = 1
  while (1) {
    if (i * i === num) {
      return true
    } else if (i * i > num) {
      return false
    } else {
      i++
    }
  }
};
