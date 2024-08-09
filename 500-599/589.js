/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
	// pre order: Root➡️ Left ➡️ Right //
	// base case //
	if (!root) return [];
	const queue = [root];
	const arr = [];

	while (queue.length) {
		const node = queue.shift();
		arr.push(node.val);
		queue.unshift(...node.children);
	}
	return arr;
};
