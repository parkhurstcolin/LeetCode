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
 * @return {string[]}
 */

//1. if root is null, return empty array
//2. Create results array
//3. Create traverse helper function(node, stringPath, results)
// a. concate node.val to stringPath
// b. if left and right node are both null, push the stringPath to results
// c. if left is not null, traverse(left)
// d. if right is not null, traverse(right)
//4. Return results
const traverse = (node, results, stringPath = "") => {
	stringPath += node.val;
	if (node.left === null && node.right === null) {
		results.push(stringPath);
	}
	if (node.left !== null) {
		traverse(node.left, results, stringPath + "->");
	}
	if (node.right !== null) {
		traverse(node.right, results, stringPath + "->");
	}
};

var binaryTreePaths = function (root) {
	if (root === null) return [];
	let results = [];
	traverse(root, results);
	return results;
};
