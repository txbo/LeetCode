/**
 * 给定一个非负整数num，重复添加所有其数字，直到结果只有一个数字。
 * 参数
 * @param {number} num
 * 返回值
 * @return {number}
 * 例子
 * addDigits(38)
 * => 2
 **/
var addDigits = function (num) {
	debugger
	var a = num
	var sum = add(a)
	return sum

	function add(n) {
		for (var sum = 0; n > 0; n = parseInt(n / 10)) {
			sum = sum + n % 10
		}
		if (parseInt(sum / 10) === 0) {
			return sum
		} else {
			return add(sum)
		}
	}
};