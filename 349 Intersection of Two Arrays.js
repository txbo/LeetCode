/**
 * 给定两个数组，写一个函数来计算它们的交集。结果无重复
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
var intersection = function(nums1, nums2) {
    debugger
    nums1.sort(function(a,b){return a-b})
    for(var i=0; i<nums1.length-1; i++){
        if(nums1[i] == nums1[i+1]){
            nums1.splice(i,1)
            i--
        }
    }
    nums2.sort(function(a,b){return a-b})
    for(var i=0; i<nums2.length-1; i++){
        if(nums2[i] == nums2[i+1]){
            nums2.splice(i,1)
            i--
        }
    }
    if(nums1[0]>=nums2[0]){
        return compare(nums1,nums2)
    }else{
        return compare(nums2,nums1)
    }
    function compare(big,sml){
        var result = []
        if(big[0] == sml[0]){
            for(var i=0; i<sml.length; i++){
                if(big[i]==sml[i]){
                    result.push(sml[i])
                }else{
                    return result
                }
            }
        }else{
            sml.splice(0,1)
            compare(big,sml)
        }
    }
};
*/
var intersection = function (nums1, nums2) {
  debugger
  var theHash = {}
  var result = []
  for (var i = 0; i < nums1.length; i++) {
    theHash[nums1[i]] = true
  }
  for (var i = 0; i < nums2.length; i++) {
    if (theHash[nums2[i]]) {
      result.push(nums2[i])
      delete theHash[nums2[i]]
    }
  }
  return result
};