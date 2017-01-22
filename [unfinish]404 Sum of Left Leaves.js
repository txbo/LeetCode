/**
 * 找到给定二叉树中所有左叶的总和。
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
var sumOfLeftLeaves = function (root) {
	debugger
	var result = 0
	add(root, result)

	function add(root, result) {
		if (root) {
			if (root.left !== null && root.left.left === null && root.left.right === null) {
				result += root.left
			}
			add(root.left, result)
			add(root.right, result)
		}
	}
	return result
};