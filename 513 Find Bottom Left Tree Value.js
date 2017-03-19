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
var findBottomLeftValue = function(root) {
  var deep = 0
    , value = root.val
  return find(root)

  function find(root, nowDeep=0) {
    if (!root.left && !root.right && deep < nowDeep) {
      deep = nowDeep
      return value = root.val
    }
    nowDeep++
    if (root.left) {
      value = find(root.left, nowDeep)
    }
    if (root.right) {
      value = find(root.right, nowDeep)
    }
    nowDeep--
    return value
  }
};
