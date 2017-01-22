/**
 * 输出帕斯卡三角的前 n 行，是 119 题的升级
 * 循环打印计算出的每一行
 */
var generate = function (numRows) {
	var result = []
	if (numRows == 0) {
		return []
	} else {
		for (var i = 0; i < numRows; i++) {
			result.push(printRow(i))
		}
	}
	return result

	function printRow(n) {
		var row = [1, 1]
		if (n == 0) {
			return [1]
		} else if (n == 1) {
			return row
		} else {
			for (var i = 0; i < n - 1; i++) {
				for (var j = row.length - 1; j >= 1; j--) {
					row[j] = row[j] + row[j - 1]
				}
				row.push(1)
			}
			return row
		}
	}
};