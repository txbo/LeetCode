/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  var count = 0
  var max = 0
  var now = null
  var result = []
  find(root)
  return result

  function find(root) {
    if (root) {
      find(root.left)
      if (result.length === 0) {
        now = root.val
        result.push(now)
        count = 1
        max = 1
      } else if (root.val === now) {
        count++
        if (max < count) {
          result = [result[result.length - 1]]
        }
        if (count === max) {
          result.push(root.val)
        }
        max = max < count ? count : max
      } else {
        count = 1
        if (count === max) {
          result.push(root.val)
        }
        now = root.val
      }
      find(root.right)
    }
  }
};
