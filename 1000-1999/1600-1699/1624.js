/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
	let l = -1;
	s = s.split("");
	let store = [s[0]];

	for (let y = 1; y < s.length; y++) {
		if (store.includes(s[y])) {
			if (y - store.indexOf(s[y]) - 1 > l) l = y - store.indexOf(s[y]) - 1;
		}
		store.push(s[y]);
	}
	if (l >= 0) return l;
	return -1;
};
