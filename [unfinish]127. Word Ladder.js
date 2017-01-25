/**
 * 栈溢出，需要调试
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  var result = Infinity,
    count = 0
  return find(beginWord, endWord, wordList)

  function find(beginWord, endWord, wordList) {
    var theReg = []
    if (beginWord === endWord) {
      return 0
    }
    for (var i = 0; i < beginWord.length; i++) {
      let temp = beginWord.split('')
      temp.splice(i, 1, '.')
      temp = temp.join('')
      theReg.push(new RegExp('^' + temp + '$'))
    }
    for (var i = 0; i < theReg.length; i++) {
      for (var j = 0; j < wordList.length; j++) {
        if (theReg[i].test(wordList[j]) && beginWord !== wordList[j]) {
          count++
          find(wordList[j], endWord, wordList)
          result = result > count ? count : result
        }
        count = 0
      }
    }
    return result
  }
};