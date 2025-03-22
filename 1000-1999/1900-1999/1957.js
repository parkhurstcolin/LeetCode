/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
	s = s.split("");
	let store = [];

	for (let y = 0; y < s.length; y++) {
		while (s[y] == s[y - 1] && s[y] == s[y - 2]) {
			y++;
		}
		store.push(s[y]);
	}
	return store.join("");
};
