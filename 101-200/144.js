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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	if (root == null) return [];
	let preorder = [root.val];

	const traverse = (node) => {
		if (node == null) return;
		preorder.push(node.val);
		traverse(node.left);
		traverse(node.right);
	};
	traverse(root.left);
	traverse(root.right);

	return preorder;
};