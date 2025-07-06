/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const map = new Map([
	["a", 1],
	["b", 2],
	["c", 3],
	["d", 4],
	["e", 5],
	["f", 6],
	["g", 7],
	["h", 8],
	["i", 9],
	["j", 10],
	["k", 11],
	["l", 12],
	["m", 13],
	["n", 14],
	["o", 15],
	["p", 16],
	["q", 17],
	["r", 18],
	["s", 19],
	["t", 20],
	["u", 21],
	["v", 22],
	["w", 23],
	["x", 24],
	["y", 25],
	["z", 26],
]);
var getLucky = function (s, k) {
	let n = Number;
	s = s.split("");

	for (let y = 0; y < s.length; y++) s[y] = map.get(s[y]);
	s = s.join("").split("");

	while (k > 0) {
		n = 0;
		for (let y = 0; y < s.length; y++) n += Number(s[y]);
		k--;
		s = n.toString().split("");
	}
	return n;
};
