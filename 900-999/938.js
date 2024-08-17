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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
	if (root == null) return 0;
	let range = [];
	let sum = 0;

	const traverse = (node) => {
		if (node == null) return;
		traverse(node.left);
		range.push(node.val);
		traverse(node.right);
	};
	traverse(root);

	for (let y = 0; y < range.length; y++) {
		if (range[y] == low) {
			sum = sum + range[y];
			while (range[y] != high) {
				y++;
				sum = sum + range[y];
				if (y > range.length) return 0;
			}
			return sum;
		}
	}
	return 0;
};
