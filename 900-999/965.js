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
var isUnivalTree = function (root) {
	if (root == null) return false;
	let uniVal = true;

	const traverse = (node) => {
		if (node == null) return;
		if (node.val != root.val) uniVal = false;
		traverse(node.left);
		traverse(node.right);
	};
	traverse(root);

	return uniVal;
};
