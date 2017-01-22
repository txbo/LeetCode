/**
 * 判断一个数是不是回文数字
 * 首先负数不是回文数字，如果传入数字小于0，返回false
 * 其次0是回文数字，如果传入数字是0，返回true
 * 最后，排除以上特殊情况后，定义一个变量 reX 复制 x 以备用比较
 * 算法思路，将复制的 reX 数字膜10并与前一次计算的 sum*10 相加，将这个数字倒转
 * 最后比较倒转后的 reX 与传入的 x， 如果相等，返回 true，不等返回 false
 *
 * 由于 leetCode 给的复杂度合适，可以接收
 * 如果 复杂度比较紧张，可以优化倒转的 reX ，只倒转一半，再与传入的X的前一半比较，奇数情况下可以不用考虑中间数字。
 **/
var isPalindrome = function (x) {
	var sum = 0
	if (x < 0) {
		return false
	} else if (x == 0) {
		return true
	} else {
		var reX = x
		for (; reX > 0; reX = parseInt(reX / 10)) {
			sum = sum * 10 + reX % 10
		}
		if (x == sum) {
			return true
		} else {
			return false
		}
	}
};