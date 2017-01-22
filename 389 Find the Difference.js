/**
 * 给定两个字符串s和t只由小写字母组成。
 * 字符串t由随机洗牌字符串s生成，然后在随机位置添加一个字母。
 * 查找在t中添加的字母。
 * 参数
 * @param {string} s
 * @param {string} t
 * 返回值
 * @return {character}
 * 例子
 * findTheDifference("abcd", "abcde")
 * => e
 **/
var findTheDifference = function (s, t) {
	var aS = s.split("").sort()
	var aT = t.split("").sort()
	var len = aT.length
	for (var i = 0; i < len; i++) {
		if (aS[i] !== aT[i]) {
			return aT[i]
		}
	}
};