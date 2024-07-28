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
	function traverse(node) {
		if (!node) {
			return;
		}
		arr.push(node.val);
		traverse(node.right);
		traverse(node.left);
	}
	traverse(root);
	var diff = Infinity;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (i !== j) {
				m = arr[i] - arr[j];
				if (m >= 0) {
					diff = Math.min(diff, m);
				}
			}
		}
	}
	return diff;
};
