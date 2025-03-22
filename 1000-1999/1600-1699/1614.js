/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
	let max = 0;
	let depth = 0;
	s = s.split("");
	for (let y = 0; y < s.length; y++) {
		if (s[y] == "(") depth++;
		else if (s[y] == ")" && depth > 0) depth--;
		if (max < depth) max = depth;
	}
	return max;
};
