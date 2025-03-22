/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
	s = s.split("");
	let store = [];
	for (let y = 0; y < indices.length; y++) store.push("");
	for (let x = 0; x < s.length; x++) {
		store[indices[x]] = s[x];
	}
	return store.join("");
};
