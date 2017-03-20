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
var largestValues = function(root) {
  var value = []
  root && find(root)
  return value

  function find(root, deep=0) {
    value[deep] = value[deep]===undefined || root.val > value[deep] ? root.val : value[deep]
    deep++
    if (root.left) {
      find(root.left, deep)
    }
    if (root.right) {
      find(root.right, deep)
    }
    deep--
  }
};
