/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
	let n = -1;
	s = s.split(" ");
	for (let y = 0; y < s.length; y++) {
		let x = Number(s[y]);
		if (x >= 0) {
			if (n < x) n = x;
			else return false;
		}
	}
	return true;
};
