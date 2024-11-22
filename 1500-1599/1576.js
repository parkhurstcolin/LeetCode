/**
 * @param {string} s
 * @return {string}
 */
const map = new Map([
	[1, "a"],
	[2, "b"],
	[3, "c"],
	[4, "d"],
	[5, "e"],
	[6, "f"],
	[7, "g"],
	[8, "h"],
	[9, "i"],
	[10, "j"],
	[11, "k"],
	[12, "l"],
	[13, "m"],
	[14, "n"],
	[15, "o"],
	[16, "p"],
	[17, "q"],
	[18, "r"],
	[19, "s"],
	[20, "t"],
	[21, "u"],
	[22, "v"],
	[23, "w"],
	[24, "x"],
	[25, "y"],
	[26, "z"],
]);

var modifyString = function (s) {
	let count = 1;
	s = s.split("");
	for (let y = 0; y < s.length; y++) {
		if (count > 26) count = 1;
		if (s[y] == "?") {
			if (s[y + 1] != map.get(count) && s[y - 1] != map.get(count)) {
				s[y] = map.get(count);
			} else {
				while (s[y + 1] == map.get(count) || s[y - 1] == map.get(count)) {
					count++;
				}
				s[y] = map.get(count);
			}
			count++;
		}
	}

	return s.join("");
};
