/**
 * 判断是否是丑数，没想到 JavaScript 中最快
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 0) {
    return false
  } else if (num === 1) {
    return true
  } else if (~~(num / 2) === num / 2) {
    return isUgly(num / 2)
  } else if (~~(num / 3) === num / 3) {
    return isUgly(num / 3)
  } else if (~~(num / 5) === num / 5) {
    return isUgly(num / 5)
  } else {
    return false
  }
};
