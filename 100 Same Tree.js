/**
 * 判断两个二叉树是否相同
 * 退出机制
 * 如果两个节点都是空，返回 true
 * 如果两个节点不同，返回 false
 * 如果值相同且不是叶子，递归
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true
  } else if (p === null && q !== null) {
    return false
  } else if (p !== null && q === null) {
    return false
  } else if (p.val !== q.val) {
    return false
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
};