/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */

var maxDepth = function (root) {
	if (!root) return 0;
	let max = -1;

	const helper = (node, depth) => {
		if (depth > max) max = depth;
		for (let c of node.children) {
			helper(c, depth + 1);
		}
	};

	helper(root, 1);
	return max;
};
