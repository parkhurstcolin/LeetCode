/**
 * @param {string} s
 * @return {string}
 */
const map = new Map([
	[0, "a"],
	[1, "b"],
	[2, "c"],
	[3, "d"],
	[4, "e"],
	[5, "f"],
	[6, "g"],
	[7, "h"],
	[8, "i"],
	[9, "j"],
	[10, "k"],
	[11, "l"],
	[12, "m"],
	[13, "n"],
	[14, "o"],
	[15, "p"],
	[16, "q"],
	[17, "r"],
	[18, "s"],
	[19, "t"],
	[20, "u"],
	[21, "v"],
	[22, "w"],
	[23, "x"],
	[24, "y"],
	[25, "z"],
]);

function shift(c, x) {
	let n = 0;
	while (map.get(n) != c) n++;
	return map.get(n + x);
}

var replaceDigits = function (s) {
	s = s.split("");
	for (let y = 1; y < s.length; y++) {
		s[y] = shift(s[y - 1], Number(s[y]));
		y++;
	}
	return s.join("");
};
