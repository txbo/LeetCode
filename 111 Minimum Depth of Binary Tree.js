/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  var depth = Infinity,
    count = 0
  if (!root) {
    return 0
  } else {
    find(root)
  }
  return depth

  function find(root) {
    count++
    if (!root.left && !root.right) {
      depth = depth > count ? count : depth
    }
    if (root.left) {
      find(root.left)
      count--
    }
    if (root.right) {
      find(root.right)
      count--
    }
  }
};
