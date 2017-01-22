/**
 * 二进制表在顶部有4个LED，表示小时（0-11），底部的6个LED表示分钟（0-59）。
 * 已知表盘灯亮的个数，输出所有时间可能
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
	debugger
	var tmp = []
	var result = []
	var count = 0
	var min = ""
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 60; j++) {
			count = 0
			tmp = (i.toString(2) + j.toString(2)).split("")
			for (var k = 0; k < tmp.length; k++) {
				if (tmp[k] == "1") {
					count++
				}
			}
			if (count == num) {
				if (j == 0) {
					min = "00"
				} else if (j < 10 && j > 0) {
					min = "0" + j
				} else {
					min = "" + j
				}
				result.push(i + ":" + min)
			}
		}
	}
	return result
};