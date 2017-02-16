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
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (!root) {
    return 0
  } else {
    return pathSum(root.left, sum) + pathSum(root.right, sum) + find(root, sum)
  }
};

function find(root, sum) {
  var result = 0
  if (!root) {
    return result
  } else {
    if (root.val === sum) {
      result++
    }
    result += find(root.left, sum - root.val)
    result += find(root.right, sum - root.val)
    return result
  }
}
