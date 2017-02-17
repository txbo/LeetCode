/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var result = []

  function find(root, count = 0) {
    if (root) {
      if (result.length < count + 1) {
        result.unshift([])
      }
      result[result.length - count - 1].push(root.val)
      find(root.left, count + 1)
      find(root.right, count + 1)
    }
    return result
  }
  return find(root)

};
