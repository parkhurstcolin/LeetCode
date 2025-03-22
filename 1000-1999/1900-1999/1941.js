/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
	let map = new Map();
	let char = "";
	s = s.split("");

	for (let y = 0; y < s.length; y++) {
		let c = s[y];
		if (map.has(c)) {
			map.set(c, map.get(c) + 1);
		} else {
			map.set(c, 1);
			char += c;
		}
	}
	char = char.split("");

	for (let y = 0; y < char.length - 1; y++) {
		let n = [map.get(char[y]), map.get(char[y + 1])];
		if (n[0] != n[1]) return false;
	}

	return true;
};
