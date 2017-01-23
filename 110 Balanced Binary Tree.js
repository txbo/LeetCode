/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
	var rightLen = 0,
		leftLen = 0
	if (root === null || (root.left === null && root.right === null)) {
		return true
	} else {
		if (root.left !== null) {
			leftLen = depth(root.left) + 1
		}
		if (root.right !== null) {
			rightLen = depth(root.right) + 1
		}
		if (Math.abs(rightLen - leftLen) > 1 || !isBalanced(root.left) || !isBalanced(root.right)) {
			return false
		} else {
			return true
		}
	}
};

function depth(root) {
	var deepRight = 0,
		deepLeft = 0
	if (root === null || (root.left === null && root.right === null)) {
		return 0
	}
	if (root.left !== null) {
		deepLeft = depth(root.left) + 1
	}
	if (root.right !== null) {
		deepRight = depth(root.right) + 1
	}
	return deepRight > deepLeft ? deepRight : deepLeft
}