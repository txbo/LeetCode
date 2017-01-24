/**
 * 设计数据结构，便于添加和查找数据。
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.value = []
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.value.push(word)
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  var reg = new RegExp('^' + word + '$')
  return this.value.some(it => reg.test(it))
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */