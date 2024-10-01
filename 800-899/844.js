/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
	function helper(str) {
		let arr = str.split("");
		let q = [];
		for (let y = 0; y < arr.length; y++) {
			if (arr[y] == "#") q.pop();
			else q.push(arr[y]);
		}
		return q.join("");
	}

	let first = helper(s);
	let second = helper(t);

	if (first === second) return true;
	return false;
};
