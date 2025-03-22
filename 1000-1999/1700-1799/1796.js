/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
	let n = [-1, -1];
	s = s.split("");

	for (let y = 0; y < s.length; y++) {
		if (Number(s[y]) > n[0]) {
			if (Number(s[y]) >= n[1]) {
				if (s[y] != n[1]) n[0] = n[1];
				n[1] = s[y];
			} else {
				n[0] = s[y];
			}
		}
	}
	return Number(n[0]);
};
