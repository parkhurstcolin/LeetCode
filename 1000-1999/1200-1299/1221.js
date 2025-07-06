/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	s = s.split("");
	let count = 0;
	let r = 0;
	let l = 0;

	for (let y = 0; y < s.length; y++) {
		if (s[y] == "R") r++;
		else l++;

		if (r == l) {
			count++;
			r = 0;
			l = 0;
		}
	}

	return count;
};
