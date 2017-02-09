/**
 * 筛选单词列表中成员的每一个字母都集中在键盘中一行的成员
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  var one = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    two = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    three = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  return words.filter(curr => {
    return Array.prototype.every.call(curr, function(it) {
      return one.includes(it.toLowerCase())
    }) || Array.prototype.every.call(curr, function(it) {
      return two.includes(it.toLowerCase())
    }) || Array.prototype.every.call(curr, function(it) {
      return three.includes(it.toLowerCase())
    })
  })
};
