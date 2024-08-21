/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	let isSame = true;
	const traverse = (tree, node) => {
		if (tree == null) {
			if (node == null) {
				return;
			}
			isSame = false;
			return;
		}
		if (node == null) {
			if (tree == null) {
				return;
			}
			isSame = false;
			return;
		}
		if (tree.val != node.val) isSame = false;
		traverse(tree.left, node.left);
		traverse(tree.right, node.right);
	};
	traverse(p, q);
	return isSame;
};
