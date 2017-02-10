/**
 * 左叶节点值相加
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
var sumOfLeftLeaves = function(root) {
  var isLeft = true
  var result = 0
  if (root === null || (root.left === null && root.right === null)) {
    return result
  } else {
    traversal(root, result)
    return result
  }

  function traversal(r, t) {
    if (r === null) {
      return t
    }
    if (isLeft && r.left === null && r.right === null) {
      result += r.val
    }
    if (r.left !== null) {
      isLeft = true
      traversal(r.left, t)
    }
    if (r.right !== null) {
      isLeft = false
      traversal(r.right, t)
    }
  }
};
