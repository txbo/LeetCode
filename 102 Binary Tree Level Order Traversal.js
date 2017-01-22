/**
 * 将二叉树每一层节点值归纳到一起
 * 思路：通过操作 index，将节点值 push 到适当位置
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
var levelOrder = function (root) {
  var result = [],
    index = 0

  function pushing(root) {
    if (root === null) {
      return result
    }
    if (result[index] === undefined) {
      result.push([])
    }
    result[index].push(root.val)
    if (root.left) {
      index++
      pushing(root.left)
      index--
    }
    if (root.right) {
      index++
      pushing(root.right)
      index--
    }
    return result
  }
  return pushing(root)
};