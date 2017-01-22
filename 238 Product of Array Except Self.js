/**
 * 遍历数组，求出当前指针以外的所有输的乘积，O(n),无额外空间
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	var len = nums.length
	var product = 1
	var count = 0
	for (var i = 0; i < len; i++) {
		if (nums[i] === 0) {
			count++
			continue
		}
		product *= nums[i]
	}
	if (count > 1) {
		for (var i = 0; i < len; i++) {
			nums.splice(i, 1, 0)
		}
		return nums
	}
	if (count === 1) {
		for (var i = 0; i < len; i++) {
			if (nums[i] === 0) {
				nums.splice(i, 1, product)
			} else {
				nums.splice(i, 1, 0)
			}
		}
		return nums
	}
	for (var i = 0; i < len; i++) {
		nums.splice(i, 1, product / nums[i])
	}
	return nums
};