/**
 * 给定排过序的数组，去重，不允许额外空间
 * 判断相邻元素是否相等即可，注意，要在原数组上更改，new Set 方法不适用
 * 判断相同，删除一个元素，控制指针即可
 * 如果不等，计算count
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function (nums) {
	if (nums.length == 1) {
		return 1
	}
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i + 1, 1)
			i--
		}
	}
	return nums.length
};

/**
 * 给定排过序的数组，去重，不允许额外空间
 * 判断相邻元素是否相等即可，注意，要在原数组上更改，new Set 方法不适用
 * 由于只断定返回数组的长度，用 count 计数
 * 如果不等，计算count
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	if (nums.length == 1) {
		return 1
	}
	count = 0
	for (var i = 1; i < nums.length; i++) {
		if (nums[i] != nums[i - 1]) {
			nums[count] = nums[i]
			count++
		}
	}
	return nums
};