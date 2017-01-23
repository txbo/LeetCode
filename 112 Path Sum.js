/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  var result = [],
    hasPath = false
  if (root && (root.left || root.right)) {
    add(root)
  } else if (root) {
    return root.val === sum
  }
  return hasPath

  function add(root) {
    result.push(root.val)
    if (root.left) {
      add(root.left)
      result.pop()
    }
    if (root.right) {
      add(root.right)
      result.pop()
    }
    if (result.length > 1 && result.reduce((memo, curr) => memo + curr) === sum && !root.right && !root.left) {
      hasPath = true
    }
  }
};