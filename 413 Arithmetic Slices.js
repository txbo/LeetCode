/**
 * 求出数组中能组成多少个等差数列，数列长度而与等于3
 * @param {number[]} A
 * @return {number}
 * 案例
 *	A = [1, 2, 3, 4]
 *	return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
 */
var numberOfArithmeticSlices = function (A) {
	debugger
	var sum = 0
	var count = 1
	for (var i = 1; i < A.length; i++) {
		if (A[i + 1] - A[i] == A[i] - A[i - 1]) {
			sum += count++
		} else {
			count = 1
		}
	}
	return sum
};