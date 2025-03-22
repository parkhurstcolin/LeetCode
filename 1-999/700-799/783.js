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
var minDiffInBST = function (root) {
	var ans = Number.MAX_VALUE;
	var prev = Number.MAX_VALUE;
	const inorder = (root) => {
		if (!root) return;
		inorder(root.right);
		if (ans > prev - root.val) ans = prev - root.val;
		prev = root.val;
		inorder(root.left);
		return;
	};
	inorder(root);
	return ans;
};
