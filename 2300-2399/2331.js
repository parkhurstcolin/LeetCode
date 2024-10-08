/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var evaluateTree = function (root) {
	if (root == null) return;
	if (root.val == 0) return false;
	if (root.val == 1) return true;
	if (root.val == 2) {
			if (evaluateTree(root.left) || evaluateTree(root.right) == true) {
				return true;
			} else {
				return false;
			}
	}
	if (root.val == 3) {
			if (evaluateTree(root.left) & evaluateTree(root.right)) {
				return true;
			} else {
				return false;
			}
	}
};
