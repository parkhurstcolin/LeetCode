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
 * @return {number}
 */

var findSecondMinimumValue = function (root) {
	if (root == null) return -1;
	if (root.left == null && root.right == null) return -1;

	var left = root.left.val;
	var right = root.right.val;

	if (root.left.val == root.val) {
		left = findSecondMinimumValue(root.left);
	}
	if (root.right.val == root.val) {
		right = findSecondMinimumValue(root.right);
	}

	if (left != -1 && right != -1) {
		return Math.min(left, right);
	} else if (left != -1) {
		return left;
	} else {
		return right;
	}
};
