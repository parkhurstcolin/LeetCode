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

var getMinimumDifference = function (root) {
	var arr = [];
	var diff = Infinity;

	function traverse(node) {
		if (!node) return;
		traverse(node.left);
		arr.push(node.val);
		traverse(node.right);
	}
	traverse(root);

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] < diff) diff = arr[i] - arr[i - 1];
	}

	return diff;
};