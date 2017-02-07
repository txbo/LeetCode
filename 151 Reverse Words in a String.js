/**
 * 单词反转
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
  return str.split(/ +/g).reverse().join(' ').trim()
};
