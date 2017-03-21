/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  var temp = 0
  root && find(root)
  return root

  function find(root) {
    root.right && find(root.right)
    root.val += temp
    temp = root.val
    root.left && find(root.left)
  }
};
