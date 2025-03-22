/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
	if (original == null) {
		// Base case aka stop condition
		// empty tree or empty node
		return null;
	}

	// General cases
	if (original == target) {
		// current original node is target, so is cloned
		return cloned;
	}

	// Either left subtree has target, or right subtree has target
	return (
		getTargetCopy(original.left, cloned.left, target) ||
		getTargetCopy(original.right, cloned.right, target)
	);
};
