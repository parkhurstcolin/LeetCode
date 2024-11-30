/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
	let segment = false;
	s = s.split("");

	for (let y = 0; y < s.length; y++) {
		if (s[y] == "0") segment = true;
		else if (s[y] == "1" && segment) return false;
	}
	return true;
};
