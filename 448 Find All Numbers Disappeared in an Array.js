<script type="text/javascript">
  /**
   * 给定一个任意安全数字长度的数组，数组各项成员值 在 0 ~ length 之间，
   * 找出所有没有没有出现在数组里面的 0~length 之间的数字
   * @param {number[]} nums
   * @return {number[]}
   */
  var findDisappearedNumbers = function(nums) {
    var tmp = nums.reduce(function(memo, curr) {
      debugger
      memo[curr] = curr
      return memo
    }, [])

    var result = []
    for (var i = 1; i <= nums.length; i++) {
      if (tmp[i] === undefined) {
        result.push(i)
      }
    }
    return result
  };

</script>
