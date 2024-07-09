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

function traverseRoot(root, res) {
	if (root == null) return;
	else res.push(root.val);
	traverseRoot(root.left, res);
	traverseRoot(root.right, res);
}

var postorderTraversal = function (root) {
	let res = [];
	let revRes = [];
	traverseRoot(root, res);
	for (let y = res.length - 1; y >= 0; y--) {
		revRes.push(res[y]);
	}
	return revRes;
};

/**
function preOrder (root, res) {
  if(root == null) return;
  else res.push(root.val);
  preOrder(root.left, res);
  preOrder(root.right, res);
};
var preorderTraversal = function(root) {
  let res = [];
  preOrder(root, res);
  return res;
};
*/
