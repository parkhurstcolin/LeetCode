/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
	s = s.split("");
	let x = 0;
	for (let y = 0; y < s.length; y++) {
		let c = s[y];
		if (c == "X") {
			x++;
			s[y] = "O";
			s[y + 1] = "O";
			s[y + 2] = "O";
		}
	}
	return x;
};
