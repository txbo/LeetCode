/**
 * Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
 * 翻转二叉树（左右翻转）
 */
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
var invertTree = function (root) {
    if (root == null) {
        return null
    }
    var tmp = root.right
    root.right = root.left
    root.left = tmp
    invertTree(root.left)
    invertTree(root.right)
    return root
};