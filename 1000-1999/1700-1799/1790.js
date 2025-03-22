/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
	let store = [];
	let charOff = 0;
	s1 = s1.split("");
	s2 = s2.split("");
	for (let y = 0; y < s1.length; y++) {
		if (s1[y] != s2[y]) {
			charOff++;
			store.push(s1[y]);
			store.push(s2[y]);
		}
	}
	if (charOff == 0) return true;
	else if (charOff == 2) {
		if (store[1] == store[2] && store[0] == store[3]) return true;
	}
	return false;
};
