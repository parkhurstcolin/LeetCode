/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
	if (a.indexOf(b) === -1) return b.length;
	else if (a.indexOf(b) === 0 && a.length == b.length) return -1;
	else if (a.indexOf(b) !== -1) {
		let s = a.slice(a.indexOf(b));
		return s.length;
	}
};
