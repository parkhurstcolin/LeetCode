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

var findTilt = function (root) {
	let diff = 0;

	const traverse = (node) => {
		if (node == null) return 0;
		if (node.left == null && node.right == null) return node.val;

		let left = traverse(node.left);
		let right = traverse(node.right);

		diff += Math.abs(left - right);

		return left + right + node.val;
	};
	traverse(root);
	return diff;
};
