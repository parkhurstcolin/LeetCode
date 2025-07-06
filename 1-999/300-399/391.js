/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	let parse = t.split("");
	let sub = s.split("");
	let x = 0;
	for (let y = 0; y < t.length; y++) {
		if (parse[y] == sub[x]) x++;
	}
	if (sub.length === x) return true;
	return false;
};
