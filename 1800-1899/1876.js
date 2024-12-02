/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
	let n = 0;
	s = s.split("");
	for (let y = 0; y < s.length - 2; y++) {
		let a = s[y],
			b = s[y + 1],
			c = s[y + 2];
		if (a != b && b != c && a != c) {
			n++;
		}
	}
	return n;
};
