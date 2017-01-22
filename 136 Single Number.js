/**
 * 传入一个奇数长度的数组，元素是整数，其中有且只有一个数字为重复
 */
// 第一次超时，此方法是遍历所有数组，两两比较，有重复的数字包括自己，continue两次的是有重复的
// var singleNumber = function(nums) {
// 	var count
//     for(var i=0; i<nums.length; i++){
//     	count = 0
//     	for(var j=0; j<nums.length; j++){
//     		if(nums[i] === nums[j]){
//     			continue;
//     		}
//     		count++
//     	}
//     	if(count == nums.length-1){
//     		break;
//     	}
//     }
//     return nums[i]
// };
// *****************************************************8
// 第二次超时，头位数字与后面数字比较，一旦相同，剔除这两个数，没有相同的，返回头位数
// var singleNumber = function(nums) {
// 	for(var j=1; j<nums.length; j++){
// 		if(nums[0] == nums[j]){
// 			nums.splice(0,1)
// 			nums.splice(j-1,1)
// 			j=0
// 			continue
// 		}
// 	}
// 	return nums[0]
// };
// ***********************************************8

// 异或叠加
var singleNumber = function (nums) {
    return nums.reduce((a, b) => a ^ b)
};